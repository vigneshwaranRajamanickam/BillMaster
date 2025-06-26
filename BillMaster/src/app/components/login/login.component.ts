import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import gsap from 'gsap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LogInComponent {

  loginForm!: FormGroup;
  loading!:boolean
  errorMessage = '';
  @ViewChild('loginCard') loginCard!: ElementRef; 
  commonService = inject(CommonService)
   constructor( private auth: AuthService,private router :Router){}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit() {
    // gsap.from(this.loginCard.nativeElement, {
    //   duration: 1,
    //   y: -100,
    //   opacity: 0,
    //   ease: 'bounce.out'
    // });
  }

  async onSubmit() {
    this.loading=true;
  //   if (this.loginForm.valid) {
  //      const { data, error } = await this.auth.signIn(this.loginForm.value);
  //  console.log("data",data,"error",error)
  //   if (error) {  
  //     // this.errorMessage = error.message;
  // }
  //   } else {
  //     this.router.navigate(['/dashboard']);
  //   }

  //   this.loading = false;
    }
    navigateTo(route:string){ 
        this.commonService.navigateTo(route)
   }
  }

