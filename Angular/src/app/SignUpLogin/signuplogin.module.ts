import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginHomeComponent } from './home/home.component';
import { SignUpLoginComponent } from './login/login.component';
import { LoginProfileComponent } from './profile/profile.component';
import { LoginRegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SignUpLoginComponent1 } from './sign-up-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LenderBoardComponent } from './lender-board/lender-board.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
  
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    LenderBoardComponent,
    BoardUserComponent,
    SignUpLoginComponent1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule
  ],

  exports:[
   
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    LenderBoardComponent,
    BoardUserComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [SignuploginModule]
})
export class SignuploginModule { }
