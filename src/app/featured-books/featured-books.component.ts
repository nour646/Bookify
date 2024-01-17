import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { BookServiceService } from '../services/book-service.service';


@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})
export class FeaturedBooksComponent implements OnInit{

  featuredBooks: Book[] = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getFeaturedBooks();
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
