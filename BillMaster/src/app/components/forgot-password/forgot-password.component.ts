import { Component, inject } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { supabase } from '../../supabase/supabaseClient';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
forgotForm: FormGroup;
  message = '';
  error = '';
  loader!:boolean
  commonService = inject(CommonService);
  activateRoute =  inject(ActivatedRoute)
  emailParam: any;
  isResetMode!: any;
  resetForm: FormGroup;
  success!: string;
  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.resetForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
   ngOnInit(){
    this.emailParam = this.activateRoute.snapshot.paramMap.get('email') || '';
    this.isResetMode = !!this.emailParam;
   }
  async sendResetLink() {
    this.loader = true;
    if (this.forgotForm.invalid) return;

    const { email } = this.forgotForm.value;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: `http://localhost:4000/reset-password/${email}`,
});


    if (error) {
      this.error = error.message;
    } else {
      this.message = 'Password reset link sent. Check your email.';
      this.forgotForm.reset();
    }
    this.loader = false;
  }
  async updatePassword() {
    this.loader = true;
    if (this.resetForm.invalid) return;

    const { newPassword } = this.resetForm.value;

    const { data, error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      this.error = error.message;
    } else {
      this.success = 'Password updated successfully!';
      setTimeout(() => {
        this.commonService.navigateTo('login');
      }, 2000);
    }
    this.loader=false
  }
  navigate(route:string){
   this.commonService.navigateTo(route)
  }
}
