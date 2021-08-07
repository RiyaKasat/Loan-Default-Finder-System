import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoanTypeComponent } from './loan-component/loan-type/loan-type.component';
import { LoanComponentComponent } from './loan-component/loan-component.component';

const routes: Routes = [
  {
    path: 'home', 
    component : HomeComponentComponent
  },
  {
    path: 'loan', 
    component : LoanComponentComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponentComponent]
