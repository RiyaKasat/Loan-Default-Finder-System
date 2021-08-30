import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataSourceModified } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { LoanApplications } from '../user-dashboard/models/LoanApplications';

const API_URL = 'http://localhost:3001/api/';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  upload(file: File,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST',API_URL+'file/multiple/upload/'+id, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
   

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  ModifyLoanApp(id:number, data)
  {
     
    console.log( data);
    return this.http.put<LoanApplications>(API_URL + 'loanAppOffer/update/' + id, data);
    
  }
 
  sendMessage(data){
    return this.http.put<LoanApplications>(API_URL + 'loanAppOffer/update/' ,  data);
  }



}
