import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
}
