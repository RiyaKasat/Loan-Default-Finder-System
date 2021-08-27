import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LenderDashboardService } from '../../../lender-dashboard.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private routeSub: Subscription;
  constructor(private lenderService: LenderDashboardService, private route: ActivatedRoute) { }

  userloanApplId: any;
  userData;
  name:any;

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
       this.name = this.userData["fullname"];
     
   })
   

   console.log(this.userData);


  
  }

  

}
