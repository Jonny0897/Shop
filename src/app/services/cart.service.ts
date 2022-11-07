import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Items } from 'src/assets/mock/items';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Items[] = [];
  node:AngularFireList<Items>;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
    this.node = this.db.list("cart");
   }

  addToCart(book: Items) {
    if (book.stock) {
      this.node.push(book).then((resp) => {
        console.log("added");
      }, )
    }
  }

  getCart(): Observable<Items[]> {
    return this.node.valueChanges();
  }

  clearCart() {
    this.node.remove().then(resp => {
      alert("cleared");
    });
  }



    // return this.http.delete<Items[]>("https://shop-351b7-default-rtdb.europe-west1.firebasedatabase.app/cart" + id + ".json");
  }

