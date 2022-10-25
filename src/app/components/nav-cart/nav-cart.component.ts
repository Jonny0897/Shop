import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Items } from 'src/assets/mock/items';

@Component({
  selector: 'nav-cart',
  templateUrl: './nav-cart.component.html',
  styleUrls: ['./nav-cart.component.css']
})
export class NavCartComponent implements OnInit {

  books: Items[] = this.getData();

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getData(): Items[] {
    this.http.get<any>("http://localhost:3000/Cart")
      .subscribe(res => {
        this.books = res;
      },
      err => {
        alert("Something wen wrong");
      });
    return this.books;
  }

  hiddenTotal(): boolean {
    return this.books.length != 0;
  }

  totalPrice(): number {
    let tot: number = 0;
    this.books.filter(i => tot = i.price + tot);
    return Math.floor(tot * 100) / 100;
  }

}
