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
      desktop: 'A solution-based approach for fast-tracking loan and mobile aplication development,transforming apps by leveraging digital tenets',
      mobile: ' A solution-based approach for fast-tracking web and mobile application development, ,transforming apps by leveraging digital tenets'
    },
    {
      id: "2",
      image: '../../../assets/images/Home/loan-home1.jpg',
      mobile_image: '../../../assets/images/Home/loan-home1.jpg',
      desktop: 'Finezza offers a comprehensive Loan Management System that’s flexible, agile, allowing for efficient management of loans.',
      mobile: 'Finezza offers a comprehensive Loan Management System that’s flexible, agile, allowing for efficient management of loans.'
    },
    {
      id: "3",
      image: '../../../assets/images/Home/loan-card4.jpg',
      mobile_image: '../../../assets/images/Home/image-home1.png',
      desktop: 'We understand the need for a robust Loan Origination System that caters to your lending needs and helps provide a better customer experience.',
      mobile: 'We understand the need for a robust Loan Origination System that caters to your lending needs and helps provide a better customer experience.'
    }
  ];

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
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
    nav: false
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
