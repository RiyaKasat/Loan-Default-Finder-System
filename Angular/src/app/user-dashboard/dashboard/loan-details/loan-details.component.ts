import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LenderDashboardService } from 'src/app/SignUpLogin/lender-board/lender-dashboard.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  acceptOfferFlag:boolean=false;
  rejectOfferFlag:boolean=false;
  // buttonFlag:boolean=false;

  divboolean_accept:boolean=false;
  divboolean_modify:boolean=true;

  loan_status:any;
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
    this.divShow();
  }

x 
  
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
 divShow()
 {
   console.log("div show data:",this.userData.loan_status);
   if(this.userData.loan_status=="Ongoing" || this.userData.loan_status=="Modified" || this.userData.form_modified=="Yes"){
     this.divboolean_accept=true;
   this.divboolean_modify=true;
   }
 } 

 acceptOffer()
{
  this.acceptOfferFlag = true;
  this.loan_status="Approved";
  console.log("loan status",this.loan_status)
  // Swal.fire({  
  //   position: 'top-end',  
  //   icon: 'success',  
  //   title: 'Offer has been accepted',  
  //   showConfirmButton: false,  
  //   timer: 1500  
  // })  
  this.router.navigate(['fileupload'], { state: {id:  this.userloanApplId } });

}


rejectOffer(){
  this.rejectOfferFlag= true;
  this.loan_status="Rejected";
  console.log(this.loan_status);
  Swal.fire({  
    // icon: 'error',  
    // title: 'Oops...',  
    text: 'You have rejected the offer',  
    // footer: '<a href>Why do I have this issue?</a>'  
  })
}

}
