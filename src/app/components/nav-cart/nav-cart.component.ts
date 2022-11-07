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

  books: Items[] = [];

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.books = data;
    });
  }

  // getData(): Items[] {
  //  return this.cartService.getCart();
  // }

  hiddenTotal(): boolean {
    return this.books.length != 0;
  }

  totalPrice(): number {
    let tot: number = 0;
    this.books.filter(i => tot = i.price + tot);
    return Math.floor(tot * 100) / 100;
  }

  remove(book: Items): void {
    
  }

}
