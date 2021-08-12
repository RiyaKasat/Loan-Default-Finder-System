import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginHomeComponent } from './home/home.component';
import { SignUpLoginComponent } from './login/login.component';
import { LoginProfileComponent } from './profile/profile.component';
import { LoginRegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SignUpLoginComponent1 } from './sign-up-login.component';



@NgModule({
  declarations: [
  
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SignUpLoginComponent1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  exports:[
   
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SignUpLoginComponent1
  ],
  providers: [authInterceptorProviders],
  bootstrap: [SignuploginModule]
})
export class SignuploginModule { }
