import { Component } from '@angular/core';
import { Book } from 'src/models/Book';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-discounted-books',
  templateUrl: './discounted-books.component.html',
  styleUrls: ['./discounted-books.component.css']
})
export class DiscountedBooksComponent {

  discountedBooks: Book[] = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getDiscountedBooks();
  }

  getDiscountedBooks(): void {
    this.bookService.getDiscountedBooks().subscribe(
      (discountedBooks) => {
        this.discountedBooks = discountedBooks;
      },
      (error) => {
        console.error('Error fetching discounted books:', error);
      }
    );
  }

}
