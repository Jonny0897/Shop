import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/assets/mock/items';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Items[] = [];
  url: string = "http://localhost:3000/Cart";

  constructor(
    private http: HttpClient
  ) {}

  addToCart(book: Items) {
    if (book.stock) {
      this.http.post(this.url, book)
        .subscribe({
          next: (v) => {
            alert("Product is Added");
          }
        });
    } else {
      alert("Product out of stock");
    }
  }

  // clearCart() {
  //   this.http.delete<any>(this.url)
  //   .subscribe(
  //     res => res.
  //   );
  // }

  removeFromCart() {
    this.http.delete<any>(this.url).subscribe();
  }
}
