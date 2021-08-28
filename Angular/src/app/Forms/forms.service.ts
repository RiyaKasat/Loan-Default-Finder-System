import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataSourceModified } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { LoanApplications } from '../user-dashboard/models/LoanApplications';

const API_URL = 'http://localhost:3001/api/';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {}
   
  ModifyLoanApp(id:number, data)
  {
     
    console.log( data);
    return this.http.put<LoanApplications>(API_URL + 'loanAppOffer/update/' + id, data);
    
  }
 


}
