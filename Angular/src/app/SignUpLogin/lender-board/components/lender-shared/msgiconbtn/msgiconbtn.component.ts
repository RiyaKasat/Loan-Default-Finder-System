import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lender-app-msgiconbtn',
  templateUrl: './msgiconbtn.component.html',
  styleUrls: ['./msgiconbtn.component.scss']
})
export class LenderMsgIconBtnComponent implements OnInit {
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
