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





import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { RouterModule } from '@angular/router';
import { FooterComponentComponent } from '../home-component/footer-component/footer-component.component';

import { MatTableModule } from '@angular/material/table';
import { LenderPanelsComponent } from './lender-board/components/lender-dashboard/component/panels/panels.component';
import { LenderPriceTableComponent } from './lender-board/components/lender-dashboard/component/pricetable/pricetable.component';
import { LenderWizardComponent } from './lender-board/components/lender-dashboard/component/wizard/wizard.component';
import { LenderHomeComponent } from './lender-board/components/lender-dashboard/home/home.component';
import { LenderProfileComponent } from './lender-board/components/lender-dashboard/profile/profile.component';
import { LenderRootComponent } from './lender-board/components/lender-dashboard/root/root.component';
import { LenderSettingsComponent } from './lender-board/components/lender-dashboard/settings/settings.component';
import { LenderTableComponent } from './lender-board/components/lender-dashboard/table/table.component';
import { LenderLockComponent } from './lender-board/components/lender-page/lock/lock.component';
import { LenderLoginComponent } from './lender-board/components/lender-page/login/login.component';
import { LenderRegisterComponent } from './lender-board/components/lender-page/register/register.component';
import { LenderFigurecardComponent } from './lender-board/components/lender-shared/figurecard/figurecard.component';
import { LenderFooterComponent } from './lender-board/components/lender-shared/footer/footer.component';
import { LenderHeaderComponent } from './lender-board/components/lender-shared/header/header.component';
import { LenderImagecardComponent } from './lender-board/components/lender-shared/imagecard/imagecard.component';
import { LenderMsgIconBtnComponent } from './lender-board/components/lender-shared/msgiconbtn/msgiconbtn.component';
import { LenderNavbarComponent } from './lender-board/components/lender-shared/navbar/navbar.component';
import { LenderSidebarComponent } from './lender-board/components/lender-sidebar/sidebar.component';
import { LenderSettingsService } from './lender-board/components/services/Lendersettings.service';
import { UserProfileComponent } from './lender-board/components/lender-dashboard/user-profile/user-profile.component';
import { AdminSidebarComponent } from './board-admin/Components/admin-sidebar/sidebar.component';
import { AdminWizardComponent } from './board-admin/Components/admin-dashboard/component/wizard/wizard.component';
import { AdminPanelsComponent } from './board-admin/Components/admin-dashboard/component/panels/panels.component';
import { AdminPriceTableComponent } from './board-admin/Components/admin-dashboard/component/pricetable/pricetable.component';
import { AdminHomeComponent } from './board-admin/Components/admin-dashboard/home/home.component';
import { AdminProfileComponent } from './board-admin/Components/admin-dashboard/profile/profile.component';
import { AdminRootComponent } from './board-admin/Components/admin-dashboard/root/root.component';
import { AdminSettingsComponent } from './board-admin/Components/admin-dashboard/settings/settings.component';
import { AdminTableComponent } from './board-admin/Components/admin-dashboard/table/table.component';
import { AdminLockComponent } from './board-admin/Components/admin-page/lock/lock.component';
import { AdminLoginComponent } from './board-admin/Components/admin-page/login/login.component';
import { AdminRegisterComponent } from './board-admin/Components/admin-page/register/register.component';
import { AdminFigurecardComponent } from './board-admin/Components/admin-shared/figurecard/figurecard.component';
import { AdminFooterComponent } from './board-admin/Components/admin-shared/footer/footer.component';
import { AdminHeaderComponent } from './board-admin/Components/admin-shared/header/header.component';
import { AdminImagecardComponent } from './board-admin/Components/admin-shared/imagecard/imagecard.component';
import { AdminMsgIconBtnComponent } from './board-admin/Components/admin-shared/msgiconbtn/msgiconbtn.component';
import { AdminNavbarComponent } from './board-admin/Components/admin-shared/navbar/navbar.component';


@NgModule({
  declarations: [
  
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    LenderBoardComponent,
    BoardUserComponent,
    SignUpLoginComponent1,

    LenderPanelsComponent,
    LenderPriceTableComponent,
    LenderWizardComponent,
    LenderHomeComponent,
    LenderProfileComponent,
     LenderRootComponent,
     LenderSettingsComponent,
     LenderTableComponent,
     LenderLockComponent,
     LenderLoginComponent,
     LenderRegisterComponent,
     LenderFigurecardComponent,
     LenderFooterComponent,
     LenderHeaderComponent,
     LenderImagecardComponent,
     LenderMsgIconBtnComponent,
     LenderNavbarComponent,
     LenderSidebarComponent,
     LenderBoardComponent,
     UserProfileComponent,


     AdminPanelsComponent,
     AdminPriceTableComponent,
     AdminWizardComponent,
     AdminHomeComponent,
     AdminProfileComponent,
     AdminRootComponent,
     AdminSettingsComponent,
     AdminTableComponent,
     AdminLockComponent,
     AdminLoginComponent,
     AdminRegisterComponent,
     AdminFigurecardComponent,
     AdminFooterComponent,
     AdminHeaderComponent,
     AdminImagecardComponent,
     AdminMsgIconBtnComponent,
     AdminNavbarComponent,
     AdminSidebarComponent,
     BoardAdminComponent,


  
     




   
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
    ReactiveFormsModule,

    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CommonModule,
    MatTableModule
  ],

  exports:[
   
    SignUpLoginComponent,
    LoginRegisterComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    BoardAdminComponent,
    LenderBoardComponent,
    BoardUserComponent,
    SignUpLoginComponent1,

    LenderPanelsComponent,
    LenderPriceTableComponent,
    LenderWizardComponent,
    LenderHomeComponent,
    LenderProfileComponent,
     LenderRootComponent,
     LenderSettingsComponent,
     LenderTableComponent,
     LenderLockComponent,
     LenderLoginComponent,
     LenderRegisterComponent,
     LenderFigurecardComponent,
     LenderFooterComponent,
     LenderHeaderComponent,
     LenderImagecardComponent,
     LenderMsgIconBtnComponent,
     LenderNavbarComponent,
     LenderSidebarComponent,
     LenderBoardComponent,
     UserProfileComponent,


     
     AdminPanelsComponent,
     AdminPriceTableComponent,
     AdminWizardComponent,
     AdminHomeComponent,
     AdminProfileComponent,
     AdminRootComponent,
     AdminSettingsComponent,
     AdminTableComponent,
     AdminLockComponent,
     AdminLoginComponent,
     AdminRegisterComponent,
     AdminFigurecardComponent,
     AdminFooterComponent,
     AdminHeaderComponent,
     AdminImagecardComponent,
     AdminMsgIconBtnComponent,
     AdminNavbarComponent,
     AdminSidebarComponent,
     BoardAdminComponent,


    

  ],
  providers: [authInterceptorProviders, LenderSettingsService],
  bootstrap: [SignuploginModule]
})
export class SignuploginModule { }
