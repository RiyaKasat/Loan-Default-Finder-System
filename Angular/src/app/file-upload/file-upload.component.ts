
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { columnSelectionComplete } from '@syncfusion/ej2-grids';

 


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  
  formU: FormGroup;
 

    selectedFiles?: FileList;
    currentFile?: File;
    financialProof?: File;
    addressproof?: File;
    businessownershipproof?: File;
    identityproof?: File;

    progress = 0;
    message = '';
  
    fileInfos?: Observable<any>;
  
    constructor(private uploadService:FileUploadService, public fb: FormBuilder,
      private http: HttpClient
    ) {
      
    }
    ngOnInit(): void {
      this.createForm();
      this.fileInfos = this.uploadService.getFiles();
    }

 


    
  validation_messages = {
    'repaymentAccNo': [
      { type: 'required', message: 'Loan Repayment Account No. is required' },
      { type: 'pattern', message: 'Loan Repayment Account No. must be a number' }
    ],
    'security':[
      { type: 'required', message: 'Security is required' },
    ]
  };


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  

  createForm()
  { 
  this.formU = this.fb.group({
    repaymentAccNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")] ],
    security:['', Validators.required],
     
    financialProof: [null],
    identityproof:[null],
    businessownershipproof:[null],
    addressproof:[null]


    })
  }


  // upload(): void {
  //   this.progress = 0;
  
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  
  //     if (file) {
  //       this.currentFile = file;
  
  //       this.uploadService.upload(this.currentFile).subscribe(
  //         (event: any) => {
  //           if (event.type === HttpEventType.UploadProgress) {
  //             this.progress = Math.round(100 * event.loaded / event.total);
  //           } else if (event instanceof HttpResponse) {
  //             this.message = event.body.message;
  //             this.fileInfos = this.uploadService.getFiles();
  //           }
  //         },
  //         (err: any) => {
  //           console.log(err);
  //           this.progress = 0;
  
  //           if (err.error && err.error.message) {
  //             this.message = err.error.message;
  //           } else {
  //             this.message = 'Could not upload the file!';
  //           }
  
  //           this.currentFile = undefined;
  //         });
  //     }
  
  //     this.selectedFiles = undefined;
  //   }
  // }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formU.patchValue({
      identityproof: file
    });
    this.formU.get('identityproof').updateValueAndValidity()
  }


  uploadFile1(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formU.patchValue({
      businessownershipproof: file
    });
    this.formU.get('businessownershipproof').updateValueAndValidity()
  }


  uploadFile2(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formU.patchValue({
      addressproof: file
    });
    this.formU.get('addressproof').updateValueAndValidity()
  }

  uploadFile3(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formU.patchValue({
      financialProof: file
    });
    this.formU.get('financialProof').updateValueAndValidity()
  }










  submitForm() {
    console.log("FormU",this.formU.value);
    var formData: any = new FormData();
    formData.append("name", this.formU.get('name').value);
    formData.append("CurrentFile", this.formU.get('currentFile').value);


     console.log("Mydata:",JSON.stringify(formData));
    this.http.post('http://localhost:3001/upload', this.formU.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

 


  }
 






