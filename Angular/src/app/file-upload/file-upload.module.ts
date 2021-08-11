import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({


  declarations: [
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],

  exports:
  [
    FileUploadComponent
  ]

 
   
  
})
export class FileUploadModule { }
