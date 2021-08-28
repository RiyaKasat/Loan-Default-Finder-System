import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from '../../user-dashboard.service';
import { TokenStorageService } from '../../../SignUpLogin/_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  loginUserData;
  userId: any;
  constructor(private userdashboardService: UserDashboardService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.getUserId();
    this.firstName = 'Alec';
    this.lastName = 'Thompson';
    this.getProfileDetails(this.userId);
    
  }

  public getUserId()
  {
    if(this.tokenStorageService.getToken())
    {
      this.userId = this.tokenStorageService.getUser().id;
    }
    else
    {
      console.log("Logg in first");
    }
    console.log(this.userId);
  }

  
  getProfileDetails(id:number) {
    console.log("User ID:",id);
    this.userdashboardService.getUserRegistrationData(id).subscribe((res) =>
    {
       this.loginUserData = res;
      console.log("User Data:", this.loginUserData);   
    })

  }
}
