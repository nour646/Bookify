import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const swiperTestimonail = new Swiper('.testimonial__swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: 'auto' as any,

      breakpoints: {
        1150: {
          slidesPerView: 3,
          centeredSlides: false,
        }
      }
    });

  }

}
