import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SendEmailService } from '../../send-email.service';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

@Component({
  selector: 'app-form-i',
  templateUrl: './form-i.component.html',
  styleUrls: ['./form-i.component.scss']
})
export class FormIComponent implements OnInit {

  bankDetailsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  validation_messages = {
    'repaymentAccNo': [
      { type: 'required', message: 'Loan Repayment Account No. is required' },
      { type: 'pattern', message: 'Loan Repayment Account No. must be a number' }
    ],
    'security':[
      { type: 'required', message: 'Security is required' },
    ]
  };

  ngOnInit() {
    this.createForms();
  }


  createForms() {
    
    this.bankDetailsForm = this.fb.group({
      repaymentAccNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")] ],
      security:['', Validators.required]
      
    });

  }

  onSubmitBankDetails(value){
    console.log(value);
  }



  
}
