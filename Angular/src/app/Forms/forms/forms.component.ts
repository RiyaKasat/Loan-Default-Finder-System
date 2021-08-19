import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SendEmailService } from 'src/app/send-email.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
   
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

  public subscription: Subscription;
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;

  // next() {
  //   this.stepper.next();
  // }
  // onSubmit() {
  //   return false;
  // }
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  address:FormGroup;
  pan:FormGroup;

  parentErrorStateMatcher = new ParentErrorStateMatcher();

  genders = [
    "Male",
    "Female",
    "Other"
  ];

  countries = [
    new Country('UY', 'Uruguay'),
    new Country('US', 'United States'),
    new Country('AR', 'Argentina')
  ];


  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' }
    ],
    'bio': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'gender': [
      { type: 'required', message: 'Please select your gender' },
    ],
    'birthday': [
      { type: 'required', message: 'Please insert your birthday' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],

    'loanamount': [
      { type: 'required', message: 'Loan Amount is required' },
      { type: 'pattern', message: 'Loan Amount must contain only numbers' },
     ],
     'address':[
       {type:'required', message:'Address is required'}
     ],
     'pincode':[
       {type:'required', message:'Pincode is required'},
       {type: 'pattern', message:'Pincode must contain only numbers'}
     ],
     'state':[
      {type:'required', message:'State is required'}
    ],
    'city':[
      {type:'required', message:'City is required'}
    ],
    
  };

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ],
    'pan':[
      {type: 'required', message: 'PAN no is required'},
      {type: 'pattern', message:'Enter valid PAN no'}
    ],
    companyName:[
      {type:'required', message:'Company Name is required'}
    ],
    businessPremise:[
      {type:'required', message:'Business Premise is required'}
    ],
    lastYearSales:[
      {type:'required', message:'Sales of last year is required'}
    ],
    establishedYears:[
      {type:'required', message:'Sales of last year is required'}
    ],
    'repaymentAccNo':[
      {type: 'required', message: 'Loan Repayment Account Number is required'},
      {type: 'pattern', message:'Enter valid Loan Repayment Account Number'}
    ],
    businessType:[
      {type:'required', message:'Business Type is required required'}
    ]
  }

  
  phoneNumber;
  constructor(private fb: FormBuilder, private sendmailservice: SendEmailService,  private router: Router) { 
    this.userDetailsForm = this.fb.group({
      phone: [undefined, [Validators.required]],

  });
}

goformi(){
  this.router.navigate(['bankdetails']);
}

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // matching passwords validation
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    let country = new FormControl(this.countries[0], Validators.required);

    let phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    // user details form validations
    this.userDetailsForm = this.fb.group({
      fullname: ['', Validators.required ],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group,
      loanamount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });

 
    // user links form validations
    this.accountDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
       UsernameValidator.validUsername,
       Validators.maxLength(25),
       Validators.minLength(5),
       Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
       Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      pan:['',[Validators.required, Validators.pattern("^([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([0-9]([0-9]([0-9]([0-9]([a-zA-Z])?)?)?)?)?)?)?)?)?)?$")]],
      companyName:['',[Validators.required]],
      businessPremise:['',[Validators.required]],
      lastYearSales:['',[Validators.required]],
      establishedYears:['',[Validators.required]],
      businessType:['',[Validators.required]],
      repaymentAccNo:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(false, Validators.pattern('true'))
    })

  }

  onSubmitAccountDetails(value){
    console.log(value);
  }

  onSubmitUserDetails(value){
    console.log(value);
  }




  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }


  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

 
  ngOnDestroy() {
  }

  goToPreviousPage() {
    this.router.navigate(['repository/Admin']);
  }

  
 
  // constructor( private fb: FormBuilder){
  //     this.myForm = this.fb.group({
  //         phone: [undefined, [Validators.required]],
  //   });
  }




  


