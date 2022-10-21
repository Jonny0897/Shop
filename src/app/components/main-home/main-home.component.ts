import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Items } from 'src/assets/mock/items';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  bookFilters: string = 'all';
  filterBook: Items[] = [];
  books: Items[] = this.getData();

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
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
