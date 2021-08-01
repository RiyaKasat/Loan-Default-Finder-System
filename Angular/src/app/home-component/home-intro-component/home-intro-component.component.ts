import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-intro-component',
  templateUrl: './home-intro-component.component.html',
  styleUrls: ['./home-intro-component.component.scss']
})
export class HomeIntroComponentComponent implements OnInit {

  imageObject = [
    {
      id: "1",
      image: '../../../assets/images/Home/loan-intro2.jpg',
      mobile_image: '../../../assets/images/Home/loan-intro2.jpg',
      desktop: 'A solution-based approach for fast-tracking web and mobile aplication development,transforming apps by leveraging digital tenets',
      mobile: ' A solution-based approach for fast-tracking web and mobile application development.'
    },
    {
      id: "2",
      image: '../../../assets/images/Home/loan-home1.jpg',
      mobile_image: '../../../assets/images/Home/loan-home1.jpg',
      desktop: 'Crafting integrated customer experiences by capturing human emotions to improve web and mobile app designs.',
      mobile: ' Crafting integrated customer experiences by capturing human emotions to improve web and mobile app designs.'
    },
    {
      id: "3",
      image: '../../../assets/images/Home/image-home1.png',
      mobile_image: '../../../assets/images/Home/image-home1.png',
      desktop: 'Evaluate customer satisfaction with social and sentimental analytics to create customer centric apps.',
      mobile: ' Evaluate customer satisfaction with social and sentimental analytics to create customer centric apps.'
    }
  ];

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  // scrollToForm() {
  //   document.getElementById('eForm').scrollIntoView();
  // }

  // scrollToUxParams() {
  //   document.getElementById('ux-param').scrollIntoView();
  // }

  ngOnInit(): void {
  }

}
