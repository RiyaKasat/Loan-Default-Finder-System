import { Component, Input, OnInit } from '@angular/core';
// import { TokenStorageService } from '../../../SignUpLogin/_services/token-storage.service';
// import { UserDashboardService } from '../../user-dashboard.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/SignUpLogin/_services/token-storage.service';
import { BoardAdminService } from '../../../board-admin.service';

@Component({
  selector: 'admin-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {
 
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  email: string;

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

 
  
  offersArray;
  constructor( private userdashboardservice : BoardAdminService, private tokenStorageService: TokenStorageService,
    private router: Router, private tokenService :TokenStorageService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
 
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      //this.Apply();
    }

    this.getAllOffers();
    this.getUserId();
  }


  public getUserId()
  {
    if(this.tokenService.getToken())
    {
      this.email = this.tokenService.getUser().email;
    }
    else
    {
      console.log("Logg in first");
    }
    console.log(this.email);
  }


  public getAllOffers()
  {
    this. userdashboardservice.getAllOffers().subscribe((response)=>{
      console.log('response is ', response)
      this.offersArray = response;
      console.log('offer is ', this.offersArray)
      },(error) => {
      console.log('error is ', error)
      })
  }


  Apply(id: any)
  {
    console.log(id);
    if(this.isLoggedIn)
    {
      this.router.navigate(['/applicationform'])
    }
    else{
      this.router.navigate(['/login'])
      if(this.isLoggedIn)
      {
        this.router.navigate(['/dashboard'])
      }
    }

  }

}
