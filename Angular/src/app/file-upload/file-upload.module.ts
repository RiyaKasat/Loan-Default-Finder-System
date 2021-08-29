import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({


  declarations: [
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    
   
   
   
    BrowserAnimationsModule,
  
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    
    MatIconModule,
   
  ],

  exports:
  [
    FileUploadComponent
  ]

 
   
  
})
export class FileUploadModule { }





