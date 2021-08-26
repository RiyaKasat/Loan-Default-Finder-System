

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../_services/user.service';
import { LenderSettingsService } from './components/services/Lendersettings.service';



@Component({
  selector: 'app-lender-board',
  templateUrl: './lender-board.component.html',
  styleUrls: ['./lender-board.component.scss']
})
export class LenderBoardComponent implements OnInit {

  
  content?: string;


  


public id: number;
  public backgroundColor: string;
  constructor(public settingService: LenderSettingsService, private userService: UserService) {
    this.id = settingService.getSidebarImageIndex() + 1;
    this.backgroundColor = settingService.getSidebarColor();
  }

  ngOnInit() {

    // this.userService.getModeratorBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
    
    this.settingService.sidebarImageIndexUpdate.subscribe((id: number) => {
      this.id = id + 1;
    });
    this.settingService.sidebarColorUpdate.subscribe((color: string) => {
      this.backgroundColor = color;
    });
   
  }

  ngOnDestroy() {
    this.settingService.sidebarImageIndexUpdate.unsubscribe();
    this.settingService.sidebarColorUpdate.unsubscribe();
    
  }
}


