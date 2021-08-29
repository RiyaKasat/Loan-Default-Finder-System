import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LenderDashboardService } from 'src/app/SignUpLogin/lender-board/lender-dashboard.service';
import { FormService } from '../forms.service';
import Validation from './utils/validation';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-update-offer',
  templateUrl: './admin-update-offer.component.html',
  styleUrls: ['./admin-update-offer.component.scss']
})
export class AdminUpdateOfferComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  private routeSub: Subscription;
  userloanApplId: any;
  userFormDataArr;
  public myvalue="ABC";

  constructor(private formBuilder: FormBuilder, private lenderService :LenderDashboardService,  private route: ActivatedRoute,
    private formservice :FormService) {}

    
  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.userloanApplId = params['id'];
    });

    this.getFormdata(this.userloanApplId);
    this.form = this.formBuilder.group(
      {
        offer_details: ['', Validators.required],
        lender_name: ['', Validators.required],
        tenure: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        lender_email: ['', [Validators.required, Validators.email]],

        interest_rate: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        loanStatus: ['Modified', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        form_modified:['Yes', Validators.required]
      }
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public getFormdata(id)
  {
    this.lenderService.getLoanApplicationById(id).subscribe((res)=>
    {
       this.userFormDataArr = res;
       console.log("UserFormArr---> ", this.userFormDataArr);
    })
  }

  onSubmit(): void {
    
    // const formdatainstance = new FormData();
    // formdatainstance.append("offer_details", this.form.get('offer_details').value);
    // formdatainstance.append("tenure", this.form.get('tenure').value);
    // formdatainstance.append("interest_rate", this.form.get('interest_rate').value)
    // formdatainstance.append("lender_email", this.form.get('email').value);
    // formdatainstance.append("lender_name", this.form.get('lender_name').value);
    // formdatainstance.set("form_modified", this.form.get('form_modified').value);
    // formdatainstance.set("loanStatus", this.form.get('loanStatus').value);
    
    

    Swal.fire({  
      title: 'Are you sure want to Modify?',  
      text: 'Action can not be reverted',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, Modify it!',  
      cancelButtonText: 'No, Cancel'  
    }).then((result) => {  
      if (result.value) {  
        
        Swal.fire(  
          'Modified!',  
          'Loan offer has been modified',  
          'success'  
        )  
        this.formservice.ModifyLoanApp(this.userFormDataArr.id,  this.form.value).subscribe((res) =>
        {
            console.log("Update form res", res);
        }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Offer stands as it is',  
          'error'  
        )  
      }  
    })  

  
    

   

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
