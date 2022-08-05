import { Injectable } from '@angular/core';
import { Items } from 'src/assets/mock/items';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Items[] = [];

  constructor() {}

  addToCart(product: Items) {
    this.products.push(product);
  }

  clearCart() {
    return this.products = [];
  }

  removeFromCart(product : Items) {
    this.products.filter(p => p !== product);
    console.log(this.products);
  }

  getProducts(){
    return this.products;
  }


}
