import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  year: Number;
  constructor() {
    var d = new Date();
    this.year = d.getFullYear();
  }

  ngOnInit(): void {
  }

}
