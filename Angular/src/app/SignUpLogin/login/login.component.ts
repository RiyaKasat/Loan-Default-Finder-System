import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class SignUpLoginComponent implements OnInit {
  
  loginForm: FormGroup;
  form: any = {
    email: null,
    password: null
  }
  //loginDetailsForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.createForms();
  }
  createForms() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
      
  })
}


  

  account_validation_messages={
    'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ]}
  



  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  
  }

  reloadPage(): void {
    this.router.navigate(['/dashboard'])
    // window.location.reload();
   
  }
}
