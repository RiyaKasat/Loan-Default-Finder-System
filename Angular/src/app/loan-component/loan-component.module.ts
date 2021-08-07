import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanTypeComponent } from './loan-type/loan-type.component';



@NgModule({
  declarations: [
    LoanTypeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ]
})
export class LoanComponentModule { }
