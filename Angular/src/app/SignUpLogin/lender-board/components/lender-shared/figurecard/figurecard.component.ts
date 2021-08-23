import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lender-app-figurecard',
  templateUrl: './figurecard.component.html',
  styleUrls: ['./figurecard.component.scss']
})
export class LenderFigurecardComponent implements OnInit {
  @Input() headerIcon: string;
  @Input() category: string;
  @Input() title: string;
  @Input() footerIcon: string;
  @Input() footContent: string;
  @Input() linearColor: string;
  @Input() boxShadow: string;
  constructor() { }

  ngOnInit() {
  }

}
