import { Component, OnInit } from '@angular/core';
import { Items } from 'src/assets/mock/items';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/services/book.service';
import { map, Subject } from 'rxjs';
import { databaseInstance$ } from '@angular/fire/database';
import { query, where } from 'firebase/firestore';
import { isValidTimestamp } from '@firebase/util';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  error = new Subject<string>();
  bookFilters: string = 'all';
  filterBook: Items[] = [];
  books: Items[] = [];

  constructor(
    private booksService: BookService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.books = this.getData();
    console.log(this.getNovel());
  }

  getManga(): number {
    let length: number = 0;
      this.cartService.getCart().subscribe(
      data => data.filter(Book => Book.type === "manga").length
    )
    return length;
  }

  getData(): Items[] {
    this.booksService.getBook()
      .subscribe(res => {
        this.books = res;
      },
        (err) => {
          this.error.next(err.message);
        }
      );
    return this.books;
  }

  getAllBook() {
    return this.books.length;
  }

  getNovel(): number {
    let length: number = 0;
    this.booksService.getBook().subscribe(
      data => data.filter(Book => Book.type === "manga").length
    )
    return length;
  }

  getNovels(): number {
    return 0;
  }



  onFilterRadioChanged(dataFilter: string) {
    return this.bookFilters = dataFilter;
  }

  addToCart(book: Items) {
    this.cartService.addToCart(book);
  }

}
