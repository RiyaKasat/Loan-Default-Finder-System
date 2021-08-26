import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { TokenStorageService } from './SignUpLogin/_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loan-defaulter-system';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  private readonly publicKey='BI3dClbcrugOLd9kDw3P33ZoUCfJsPvUPumjmhenvbDknu6wX4W_an0YoNT5aOWiVf4ASHaWsk6fwfkNlHGnnO0';

  constructor(private tokenStorageService: TokenStorageService, private swPush:SwPush) { }

  ngOnInit(): void {
    
    this.pushSubscription();

    this.swPush.messages.subscribe((message) => console.log(message));

    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      window.open(notification.data.url);
    });



    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  pushSubscription(){
    if(!this.swPush.isEnabled){
      console.log('Notification is not enabled');
      return;
    }
    this.swPush.requestSubscription({
     serverPublicKey:this.publicKey
    })
    .then((sub) =>console.log(JSON.stringify(sub)))
    .catch((err) =>console.log(err));
  }
}




