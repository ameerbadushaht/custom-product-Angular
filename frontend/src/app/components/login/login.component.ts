import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData);
      this.authService.login(loginData).subscribe(
        response => {
          // console.log('User logged in successfully', response);
          Swal.fire({
            icon: "success",
            title: "Sign Up Successful!",
            text: "You have signed up successfully!",
          });
          localStorage.setItem('accestoken', response.accessToken);
          localStorage.setItem('refreshtoken', response.refreshToken);
          // localStorage.setItem('role', response.role);
          // this.authService.setToken(response.accessToken);
          this.route.navigate(['/']).then(() => {
            window.location.reload();
          })
        },
        error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.error.message
            ,
          });
          console.error('Error logging in', error);
        }
      )
    }
  }

 


}



