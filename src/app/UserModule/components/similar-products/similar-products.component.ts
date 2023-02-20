import { Component ,OnInit } from '@angular/core';
import * as $ from 'jquery';
import SwiperCore, { SwiperOptions , Navigation, Pagination, Scrollbar, A11y  } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: true,
    pagination: false,

  };

  ngOnInit(): void {
    $(document).ready(function () {

      $(".similar_slider .similar_slider_layout .swiper-button-prev").appendTo(".similar_slider .similar_slider_arrows");
      $(".similar_slider .similar_slider_layout .swiper-button-next").appendTo(".similar_slider .similar_slider_arrows");

    });
  }

  
}
