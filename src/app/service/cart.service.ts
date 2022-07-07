import { Injectable } from '@angular/core';
import { Items } from '../assets/mock/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Items[] = [];

  constructor() {}

  addToCart(product: Items) {
    this.products.push(product);
  }

  getProduct() {
    console.log(this.products.entries);
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  removeFromCart(product : Items) {
    this.products.filter(p => p !== product);
    console.log(this.products);
  }

  getProducts(){
    return this.products;
  }


}
