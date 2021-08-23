import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Alec';
    this.lastName = 'Thompson';
  }

}
