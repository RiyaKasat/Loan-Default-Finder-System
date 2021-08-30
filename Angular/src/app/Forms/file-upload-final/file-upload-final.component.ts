import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormService } from '../forms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file-upload-final',
  templateUrl: './file-upload-final.component.html',
  styleUrls: ['./file-upload-final.component.scss']
})
export class FileUploadFinalComponent implements OnInit {

    selectedFiles: FileList;
    progressInfos = [];
    message = '';
  id:any;

    fileInfos: Observable<any>;
  
    constructor(private uploadService: FormService,private route: ActivatedRoute ) { }

    ngOnInit() {
      this.fileInfos = this.uploadService.getFiles();
      this.id = this.route.snapshot.paramMap.get('id')
    }
  

 
  selectFiles(event) {
    this.progressInfos = [];
  
    const files = event.target.files;
    let isImage = true;
  
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }
  
    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }

  uploadFiles() {
    this.message = '';
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }
  
  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    this.uploadService.upload(file,this.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }



}

