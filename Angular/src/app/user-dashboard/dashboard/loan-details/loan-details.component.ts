import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LenderDashboardService } from 'src/app/SignUpLogin/lender-board/lender-dashboard.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  private routeSub: Subscription;
  formId: any;
  constructor(private lenderService: LenderDashboardService, private route: ActivatedRoute, private router: Router) { }
  userloanApplId: any;
  userData;
  Lender_offeringsId:any;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.userloanApplId = params['id'];
    });
    this.getProfileDetails(this.userloanApplId);
  }

  
 getProfileDetails(id) {
  this.lenderService.getLoanApplicationById(id).subscribe((res) =>
  {
     this.userData = res;
     console.log(this.userData["businessPremise"]);
     console.log("User Data");
     console.log(this.userData);
      this.Lender_offeringsId = this.userData["lender_offeringsId"];
      this.formId = this.userData["id"];
    
  })
  

  console.log(this.userData);

 }


}
