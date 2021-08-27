import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LenderDashboardService {

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
      lender_email: email
      }
    });
  }
  


  getLoanApplicationById(id:number){
    return this.http.get(`${environment.apiUrl}getLoanApplicationById/${id}`
    );
  }

  getTransferIp() {
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("token")
    );

    return this.http.get("http://localhost:3003/transferip", {headers:header});
  }
  
}
