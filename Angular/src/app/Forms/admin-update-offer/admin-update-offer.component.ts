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
import Validation from './utils/validation';

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

  constructor(private formBuilder: FormBuilder, private lenderService :LenderDashboardService,  private route: ActivatedRoute) {}

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
        email: ['', [Validators.required, Validators.email]],

        interest_rate: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
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
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
