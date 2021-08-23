import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-app-msgiconbtn',
  templateUrl: './msgiconbtn.component.html',
  styleUrls: ['./msgiconbtn.component.scss']
})
export class AdminMsgIconBtnComponent implements OnInit {
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
