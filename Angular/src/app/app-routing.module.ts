import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoanTypeComponent } from './loan-component/loan-type/loan-type.component';
import { LoanComponentComponent } from './loan-component/loan-component.component';
import { CalculatorLoanComponent } from './calculator-loan/calculator-loan.component';
import { HomeComponent } from './user-dashboard/dashboard/home/home.component';
import { PanelsComponent } from './user-dashboard/dashboard/component/panels/panels.component';
import { PriceTableComponent } from './user-dashboard/dashboard/component/pricetable/pricetable.component';
import { WizardComponent } from './user-dashboard/dashboard/component/wizard/wizard.component';
import { NotificationComponent } from './user-dashboard/dashboard/notification/notification.component';
import { ProfileComponent } from './user-dashboard/dashboard/profile/profile.component';
import { RootComponent } from './user-dashboard/dashboard/root/root.component';
import { SettingsComponent } from './user-dashboard/dashboard/settings/settings.component';
import { SweetAlertComponent } from './user-dashboard/dashboard/sweetalert/sweetalert.component';
import { TableComponent } from './user-dashboard/dashboard/table/table.component';
import { LockComponent } from './user-dashboard/page/lock/lock.component';
import { LoginComponent } from './user-dashboard/page/login/login.component';
import { RegisterComponent } from './user-dashboard/page/register/register.component';
import { FormsComponent } from './Forms/forms/forms.component';
import { BoardAdminComponent } from './SignUpLogin/board-admin/board-admin.component';
import {  LenderBoardComponent } from './SignUpLogin/lender-board/lender-board.component';
import { BoardUserComponent } from './SignUpLogin/board-user/board-user.component';
import { LoginHomeComponent } from './SignUpLogin/home/home.component';
import { SignUpLoginComponent } from './SignUpLogin/login/login.component';
import { LoginProfileComponent } from './SignUpLogin/profile/profile.component';
import { LoginRegisterComponent } from './SignUpLogin/register/register.component';
import { FormIComponent } from './Forms/form-i/form-i.component';
import { AdminAddOfferComponent } from './Forms/admin-add-offer/admin-add-offer.component';
import { ContactUsFormComponent } from './Forms/contact-us-form/contact-us-form.component';
import { LenderRootComponent } from './SignUpLogin/lender-board/components/lender-dashboard/root/root.component';
import { LenderHomeComponent } from './SignUpLogin/lender-board/components/lender-dashboard/home/home.component';
import { LenderProfileComponent } from './SignUpLogin/lender-board/components/lender-dashboard/profile/profile.component';
import { LenderTableComponent } from './SignUpLogin/lender-board/components/lender-dashboard/table/table.component';
import { LenderSettingsComponent } from './SignUpLogin/lender-board/components/lender-dashboard/settings/settings.component';
import { LenderPriceTableComponent } from './SignUpLogin/lender-board/components/lender-dashboard/component/pricetable/pricetable.component';
import { LenderPanelsComponent } from './SignUpLogin/lender-board/components/lender-dashboard/component/panels/panels.component';
import { LenderWizardComponent } from './SignUpLogin/lender-board/components/lender-dashboard/component/wizard/wizard.component';
import { UserProfileComponent } from './SignUpLogin/lender-board/components/lender-dashboard/user-profile/user-profile.component';
import { AdminPanelsComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/component/panels/panels.component';
import { AdminPriceTableComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/component/pricetable/pricetable.component';
import { AdminWizardComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/component/wizard/wizard.component';
import { AdminHomeComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/home/home.component';
import { AdminProfileComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/profile/profile.component';
import { AdminSettingsComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/settings/settings.component';
import { AdminTableComponent } from './SignUpLogin/board-admin/Components/admin-dashboard/table/table.component';
import { AdminUpdateOfferComponent } from './Forms/admin-update-offer/admin-update-offer.component';
import { LoanDetailsComponent } from './user-dashboard/dashboard/loan-details/loan-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



const Approutes: Routes = [
  {
    path: '', 
    component : HomeComponentComponent
  },
  {
    path: 'home1', 
    component : HomeComponentComponent
  },
  {
    path: 'p', 
    component : LoanComponentComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },

  {
    path: 'loancalculator',
    component: CalculatorLoanComponent
  },
  

  {path: 'd', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register1', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, 
     children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'loancalculator', component : LoanComponentComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent}

  ]},

  { path: 'applicationform', component: FormsComponent },
  {
    path:'bankdetails',component: FormIComponent
  },
  {
    path:'adminoffer',component:AdminAddOfferComponent
  },
  {
    path:'updateoffer/:id',component:AdminUpdateOfferComponent
  },
  {
    path:'contact-us',component:ContactUsFormComponent
  },
  {
    path:'loandetails/:id',component:LoanDetailsComponent
  },
  {
    path:'fileupload',component:FileUploadComponent
  },




  { path: 'home', component: LoginHomeComponent },
  { path: 'login', component: SignUpLoginComponent },
  { path: 'register', component: LoginRegisterComponent },
  { path: 'profile', component: LoginProfileComponent },

  
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: LenderBoardComponent ,
   children:[

      {path: '', component: LenderHomeComponent},
      {path: 'profile', component: LenderProfileComponent},
      {path: 'table', component: LenderTableComponent},
      //  {path: 'loancalculator', component : LenderLoanComponentComponent},
     
      {path: 'settings', component: LenderSettingsComponent},
    
      {path: 'components/price-table', component: LenderPriceTableComponent},
      {path: 'components/panels', component: LenderPanelsComponent},
      {path: 'components/wizard', component: LenderWizardComponent}

]},

    {path:'userprofile/:id', component:UserProfileComponent},
   
 
  { path: 'admin', component: BoardAdminComponent,
  children:[

    {path: '', component: AdminHomeComponent},
    {path: 'profile', component: AdminProfileComponent},
    {path: 'table', component: AdminTableComponent},
    //  {path: 'loancalculator', component : LenderLoanComponentComponent},
   
    {path: 'settings', component: AdminSettingsComponent},
  
    {path: 'components/price-table', component: AdminPriceTableComponent},
    {path: 'components/panels', component: AdminPanelsComponent},
    {path: 'components/wizard', component: AdminWizardComponent}

]}, 

 
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

// export default Approutes;

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})


// export const routing = RouterModule.forRoot(routes);
 export class AppRoutingModule { }
 export const routingComponents = [HomeComponentComponent, CalculatorLoanComponent]
// function routes(routes: any) {
//   throw new Error('Function not implemented.');
// }

