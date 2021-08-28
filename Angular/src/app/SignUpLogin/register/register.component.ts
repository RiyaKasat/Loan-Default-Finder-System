import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  registerForm: FormGroup;

//loginDetailsForm: FormGroup;




  constructor( private authService: AuthService, private tokenStorage: TokenStorageService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForms();
  }

  onSubmit(): void {
    const { username, email, password } = this.registerForm.value;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }



  
createForms() {
  this.registerForm = this.fb.group({
    username:['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password:['', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])]
  });


}
















validation_messages={
  'email': [
  { type: 'required', message: 'Email is required' },
  { type: 'pattern', message: 'Enter a valid email' }
],
'password': [
  { type: 'required', message: 'Password is required' },
  { type: 'minlength', message: 'Password must be at least 5 characters long' },
  { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
]

}




// onSubmit(): void {
//   const { email, password } = this.loginForm.value;

//   this.authService.login(email, password).subscribe(
//     data => {
//       this.tokenStorage.saveToken(data.accessToken);
//       this.tokenStorage.saveUser(data);

//       this.isLoginFailed = false;
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//       this.reloadPage();
//     },
//     err => {
//       this.errorMessage = err.error.message;
//       this.isLoginFailed = true;
//     }
//   );


// }

reloadPage(): void {
  this.router.navigate(['/dashboard'])
  // window.location.reload();
 
}
}
