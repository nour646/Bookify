import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/models/Book';

@Injectable({
  providedIn: 'root'
})

//the api should also indicate the id of the book
export class BookServiceService {
  private apiUrl = 'https//localhost:5000/api'
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/User/GetBooks`);
  }

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/api/User/Info/${bookId}`);
  }

  getFeaturedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/api/User/FeaturedBooks`);
  }

  getNewBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/api/User/NewBooks`);
  }

  getDiscountedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/api/User/DiscountedBooks`);
  }
}
