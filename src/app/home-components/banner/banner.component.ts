import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const swiperHome = new Swiper('.home__swiper', {
      loop: true,
      spaceBetween: -24,
      grabCursor: true,
      slidesPerView: 'auto' as any,
      centeredSlides: 'auto' as any,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        1220: {
          spaceBetween: -32,
        },
      },
    });

  }

}
