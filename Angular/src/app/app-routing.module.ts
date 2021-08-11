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


const Approutes: Routes = [
  {
    path: 'home', 
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
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, 
     children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent}
  ]},

  { path: 'applicationform', component: FormsComponent }
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

