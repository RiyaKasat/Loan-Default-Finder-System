import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/SignUpLogin/_services/token-storage.service';
import { UserDashboardService } from '../../user-dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  userId;
  loanApplicationsArr;
  email;
  constructor(private tokenService :TokenStorageService, private userdashboardservice: UserDashboardService) { }

  ngOnInit() {
    this.getUserId();
    this.getAllOffers();
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


  public getAllOffers()
  {
    this. userdashboardservice.getAllLoanApplications(this.userId).subscribe((response)=>{
      console.log('Loan Appln response ', response)
      this.loanApplicationsArr = response;
      console.log('All Loan Applications of users are', this.loanApplicationsArr)
      },(error) => {
      console.log('error is ', error)
      })
  }

  public getAllByMod()
  {
    this. userdashboardservice.getAllLoanApplicationsByMod(this.email).subscribe((response)=>{
      console.log('Loan Appln response ', response)
      this.loanApplicationsArr = response;
      console.log('All Loan Applications of moderators are', this.loanApplicationsArr)
      },(error) => {
      console.log('error is ', error)
      })
  }

}
