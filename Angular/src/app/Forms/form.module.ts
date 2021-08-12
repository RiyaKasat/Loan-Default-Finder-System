import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './forms/forms.component';
import { FormsMainComponent } from './formsMain.component';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';






@NgModule({
  declarations: [
   
  
    FormsComponent,
    FormsMainComponent,
    ContactUsFormComponent,
    EnquiryFormComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
   
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    FileUploadModule
  ],
  exports:
  [
    FormsComponent,
    FormsMainComponent,
  ]
})
export class FormModule { }
