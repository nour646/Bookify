import { Component, AfterViewInit, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from 'src/models/Book';
import Swiper from 'swiper';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements AfterViewInit, OnInit{

  newBooks: Book[] = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getNewBooks();
  }

  getNewBooks(): void {
    this.bookService.getNewBooks().subscribe(
      (newBooks) => {
        this.newBooks = newBooks;
      },
      (error) => {
        console.error('Error fetching new books:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    const swiperNew = new Swiper('.new__swiper', {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',

      breakpoints: {
        1150: {
          slidesPerView: 3,
        }
      }
    });
  }
}
