

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SendEmailService } from 'src/app/send-email.service';
import { FormService } from '../forms.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  ngOnInit(): void {
       }
    
  contactUsForm :FormGroup;
// contactUsForm1:FormGroup;
  // New
  disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;
//new close

  constructor(private fb: FormBuilder, private connectionService: FormService, private sendmailservice: SendEmailService) {
    this.contactUsForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
    
      
     
  }
  



  
  // New
 

  onSubmit() {
    this.connectionService.sendMessage(this.contactUsForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactUsForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  
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

  get name() { return this.contactUsForm.get('contactName'); }
  get email() { return this.contactUsForm.get('contactEmail'); }

  // contactUsForm1 = this.fb.group({
  //   'contactName': ['', Validators.required],
  //   'contactEmail': ['', Validators.compose([Validators.required, Validators.email])],
  // )}

  public subscription: Subscription;

  sendMail() {
    console.log(this.contactUsForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.contactUsForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }


}
//   validation_messages = {
    
//     'email': [
//       { type: 'required', message: 'Email is required' },
//       { type: 'pattern', message: 'Enter a valid email' }
//     ],
//     'query':[
//       {type: 'required' , message:'Please enter your query in brief'}
//     ],
//     'companyName':[
//       {type:'required', message:'Company Name required'}
//     ]

// };



//   ngOnInit(): void {
//   }

//   createForm(){
//     this.contactUsForm=this.fb.group({
//       email: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
//       ])),
//       companyName: ['', Validators.required ],
//       query: ['', Validators.required],
//     });
//   }


//   onSubmit(value){
//     console.log(value);
//   };

// }
