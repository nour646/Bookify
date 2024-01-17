import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from 'src/models/Book';
import Swiper from 'swiper';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements AfterViewInit, OnInit{

  featuredBooks: Book[] = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getFeaturedBooks();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const swiperFeatured = new Swiper('.featured__swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 1,
      centeredSlides: 'auto'as any,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },


      breakpoints: {
          1150: {
              slidesPerView: 4,
              centeredSlides: false,
          }
      }
    });
  }

  getFeaturedBooks(): void {
    this.bookService.getFeaturedBooks().subscribe(
      (featuredBooks) => {
        this.featuredBooks = featuredBooks;
      },
      (error) => {
        console.error('Error fetching featured books:', error);
      }
    );
  }
}
