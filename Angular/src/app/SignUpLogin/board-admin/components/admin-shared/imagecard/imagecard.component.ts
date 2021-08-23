import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.scss']
})
export class AdminImagecardComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() footerTitle: string;
  @Input() position: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
