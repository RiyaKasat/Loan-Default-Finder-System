import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {


  contactUsForm :FormGroup;
  constructor(private fb: FormBuilder) { }

  validation_messages = {
    
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'query':[
      {type: 'required' , message:'Please enter your query in brief'}
    ],
    'companyName':[
      {type:'required', message:'Company Name required'}
    ]

};



  ngOnInit(): void {
  }

  createForm(){
    this.contactUsForm=this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      companyName: ['', Validators.required ],
      query: ['', Validators.required],
    });
  }


  onSubmit(value){
    console.log(value);
  };

}
