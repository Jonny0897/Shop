import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Items } from 'src/assets/mock/items';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/services/book.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  bookFilters: string = 'all';
  filterBook: Items[] = [];
  books: Items[] = this.getData();
  collection: Items[] = [];

  constructor(
    private booksService: BookService,
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {}

  fetch(): Items[] {
    const collection: Items[] = [];
    this.booksService.getBook()
    .subscribe(
      data =>  {
        for( var book of data ) {
          collection.push(book);
        }
      }
    );
    return collection;
  }

  getData(): Items[] {
    this.http.get<any>("http://localhost:3000/Books")
      .subscribe(res => {
        this.books = res;
      })
    return this.books;
  }

  getAllBook() {
    return this.books.length;
  }

  getNovels() {
    return this.books.filter(Book => Book.type == "novels").length;
  }

  getManga() {
    return this.books.filter(Book => Book.type == "manga").length;
  }

  onFilterRadioChanged(dataFilter: string) {
    return this.bookFilters = dataFilter;
  }

  addToCart(Book: Items) {
    this.cartService.addToCart(Book);
  }

}
