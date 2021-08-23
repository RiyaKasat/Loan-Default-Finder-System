import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/SignUpLogin/_services/token-storage.service';
import { UserDashboardService } from '../../user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './loancal.component.html',
  styleUrls: ['./loancal.component.scss']
})
export class LoanCalComponent implements OnInit {
 


  ngOnInit() {
  }
}