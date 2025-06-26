import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { supabase } from '../../supabase/supabaseClient';
import { CommonService } from '../../services/common.service';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
})
export class SignUpComponent {
  signupForm: FormGroup;
  errorMessage = '';
  commonService = inject(CommonService)
  loader!: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      storeName: ['', Validators.required],
      mobile: [''], // optional
    });
  }

  async signUp() {
    this.loader=true
    if (this.signupForm.invalid) return;

    const { email, password, storeName, mobile } = this.signupForm.value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      this.errorMessage = error.message;
      return;
    }

    const userId = data.user?.id;

    if (userId) {
      await supabase.from('stores').insert({
        name: storeName,
        owner_user_id: userId,
        mobile_number: mobile || null,
      });
    }
    this.loader = false;
    this.router.navigate(['/dashboard']);
  }
  navigate(route:string){
    this.commonService.navigateTo(route)
  }
}
