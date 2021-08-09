import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoanTypeComponent } from './loan-component/loan-type/loan-type.component';
import { LoanComponentComponent } from './loan-component/loan-component.component';
import { CalculatorLoanComponent } from './calculator-loan/calculator-loan.component';


const Approutes: Routes = [
  {
    path: 'home', 
    component : HomeComponentComponent
  },
  {
    path: 'p', 
    component : LoanComponentComponent
  },
  {
    path: '**',
    redirectTo: '',
  },

  {
    path: 'loancalculator',
    component: CalculatorLoanComponent
  }
];

// export default Approutes;

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }
 export const routingComponents = [HomeComponentComponent, CalculatorLoanComponent]
