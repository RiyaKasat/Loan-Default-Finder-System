import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../SignUpLogin/_services/token-storage.service';
import { LoanApplications } from '../../models/LoanApplications';
import { UserDashboardService } from '../../user-dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TableComponent implements OnInit {
  
  
  displayedColumns: string[] = [ 'id', 'lendername', 'lender_email', 'lenderOfferingId', 'createdDate', 'loanStatus', 'action'];
  dataSource: MatTableDataSource<LoanApplications>;

  


  userId;
  loanApplicationsArr;
  email;
  constructor(private tokenService :TokenStorageService, private userdashboardservice: UserDashboardService,private router: Router) { }

  ngOnInit() {
    this.getUserId();
    this.getAllLoanApplications();
  }

  public getUserId()
  {
    if(this.tokenService.getToken())
    {
      this.userId = this.tokenService.getUser().id;
      this.email = this.tokenService.getUser().email;
    }
    else
    {
      console.log("Logg in first");
    }
    console.log("User UserId"+ this.userId);
    console.log("Mod email is"+ this.email);
  }


  public getAllLoanApplications()
  {
    this.userdashboardservice.getAllLoanApplications(this.userId).subscribe((response)=>{
 
      this.dataSource = new MatTableDataSource(<any>response);
      console.log('Loan Appln response ', response)
      this.loanApplicationsArr = response;
      console.log('All Loan Applications of users are', this.loanApplicationsArr)
      },(error) => {
      console.log('error is ', error)
      })
  }

  public getAllByMod()
  {
    this.userdashboardservice.getAllLoanApplicationsByMod(this.email).subscribe((response)=>{
      console.log('Loan Appln response ', response)
      this.loanApplicationsArr = response;
      console.log('All Loan Applications of moderators are', this.loanApplicationsArr)
      },(error) => {
      console.log('error is ', error)
      })
  }

  goLoanDetails(id){
    this.router.navigate(['userprofile', id], { queryParams: { id: id} });
  }


  
  



 



}


