import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from './user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  title = 'app works!';
 

  constructor() { }

  ngOnInit(): void {
    console.log("hello");
    
  }

  
}
