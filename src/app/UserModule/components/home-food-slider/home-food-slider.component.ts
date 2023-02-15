import { Component , OnInit } from '@angular/core';

import SwiperCore, { SwiperOptions } from 'swiper';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-home-food-slider',
  templateUrl: './home-food-slider.component.html',
  styleUrls: ['./home-food-slider.component.scss']
})
export class HomeFoodSliderComponent implements OnInit  {
  constructor(){}

  ngOnInit(): void {
  }


  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: true,
    pagination: false,

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
}
