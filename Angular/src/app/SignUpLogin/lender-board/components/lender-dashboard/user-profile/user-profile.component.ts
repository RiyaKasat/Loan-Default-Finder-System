import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LenderDashboardService } from '../../../lender-dashboard.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

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


   public ModifyOffer(id)
   {
    Swal.fire({  
      title: 'Are you sure want to Modify?',  
      text: 'You will not be able revert it',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, Modify!',  
      cancelButtonText: 'Do not Modify'  
    }).then((result) => {  
      if (result.value) {  

        Swal.fire(  
          'Modified!',  
          'Application status changed to Modified.',  
          'success'  
        )  
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'No changes are made.',  
          'error'  
        )  
      }  
    })
    this.router.navigate(['updateoffer', id], { queryParams: { id: id} });
    
   }
  
   rejectLoan(){
    Swal.fire({  
      title: 'Are you sure want to Reject?',  
      text: 'You will not be able revert it',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, Reject!',  
      cancelButtonText: 'Do not Reject'  
    }).then((result) => {  
      if (result.value) {  

        Swal.fire(  
          'Rejected!',  
          'Application status changed to Rejected.',  
          'success'  
        )  
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'No changes are made.',  
          'error'  
        )  
      }  
    })

   }

   goAhead(){
     
   }

  

}
