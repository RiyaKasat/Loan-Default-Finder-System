import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const API_URL = 'http://localhost:3001/api/';
@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http: HttpClient) { }

  getAllOffers(){
    return this.http.get(API_URL+'getAllOffers');
  }
  
  getUserId()
  {
    return this.http.get(API_URL+'getUserId');
  }

  getAllLoanApplications(userId:number){
    return this.http.get(API_URL+'getAllApplicationsByUser', {
      params:{
      id: userId
      }
    });
  }

  getAllLoanApplicationsByMod(email:string){
    return this.http.get(API_URL+'getAllLoanAppByMod', {
      params:{
      email: email
      }
    });
  }
  
  
}
