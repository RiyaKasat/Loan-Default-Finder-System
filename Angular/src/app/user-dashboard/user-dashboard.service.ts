import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http: HttpClient) { }

  getAllOffers(){
    return this.http.get(`${environment.apiUrl}getAllOffers`);
  }
  
  getUserId()
  {
    return this.http.get(`${environment.apiUrl}getUserId`);
  }

  getAllLoanApplications(userId:number){
    return this.http.get(`${environment.apiUrl}getAllApplicationsByUser`, {
      params:{
      id: userId
      }
    });
  }

  getAllLoanApplicationsByMod(email:string){
    return this.http.get(`${environment.apiUrl}getAllLoanAppByMod`, {
      params:{
      email: email
      }
    });
  }
  
  
}
