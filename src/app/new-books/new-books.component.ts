import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { BookServiceService } from '../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit{

  newBooks: Book[] = [];

  constructor(private bookService: BookServiceService, private router: Router) {}

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

  navigateToNewBooks() {
    this.router.navigate(['/new-books']);
  }

}
