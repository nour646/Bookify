import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from 'src/models/Book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  book!: Book;
  bookId!: number;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = +params['id'];
      this.loadBookDetails();
    });
  }

  loadBookDetails(): void {
    this.bookService.getBookById(this.bookId).subscribe(
      (bookDetails) => {
        this.book = bookDetails;
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }
}
