import { Component, OnInit } from '@angular/core';
declare const swal: any;

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openAlert(type) {
    switch (type) {
   
      case 'success':
        swal({
          title: 'Good job!',
          text: 'You clicked the button!',
          type: 'success',
          confirmButtonClass: 'btn btn-success'
        });
        break;
     
    }
  }

}
