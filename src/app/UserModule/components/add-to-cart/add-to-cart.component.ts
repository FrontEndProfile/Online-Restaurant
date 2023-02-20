
import { Component, OnInit } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  //   template: `
  //   <gallery [items]="images"></gallery>
  // `
  //   ,
  styleUrls: [
    "./add-to-cart.component.scss",
  ],
})
export class AddToCartComponent implements OnInit {

  images: Image[] = [
    new Image(0, {
      img: '/assets/images/[card]1.png'
    }),
    new Image(1, {
      img: '/assets/images/[card]2.png'
    }),
    new Image(2, {
      img: '/assets/images/[card]3.png'
    }),
    new Image(3, {
      img: '/assets/images/[card]4.png'
    })

  ];
  quantity: number = 1;
  i = 1
  plus() {
    if (this.i != 9) {
      this.i++
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--
      this.quantity = this.i;
    }
  }
  ngOnInit() {



    $(document).ready(function () {

      $("#carousel-container > .current-figure > .nav-left").appendTo(".product_layout .product_layout_arrows_row .product_img_arrow");

      $("#carousel-container > .current-figure > .nav-right").appendTo(".product_layout .product_layout_arrows_row .product_img_arrow");
    });

  }
}
