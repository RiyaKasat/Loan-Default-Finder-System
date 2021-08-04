import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/home-component/home.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });
  constructor(private homeservice:HomeService) {
    
   }

  ngOnInit(): void {
  }

  callingFunction()
  {
    console.log("Submitted");
    console.log(this.bioSection.value);
    this.homeservice.Send(this.bioSection.value).subscribe()
  }
}
