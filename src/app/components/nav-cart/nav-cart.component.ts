import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'nav-cart',
  templateUrl: './nav-cart.component.html',
  styleUrls: ['./nav-cart.component.css']
})
export class NavCartComponent implements OnInit {

    // items = this.cartService.getProducts();
    items = [
    { id: 1, name: "product1", price: 20, type: "product1" },
    { id: 2, name: "product2", price: 14, type: "product1" },
    { id: 3, name: "product3", price: 61, type: "product1" },
    ];

  constructor(
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  hiddenTotal(): boolean{
    return this.items.length != 0;
  }

  totalPrice(): number {
   let tot: number = 0;
   this.items.filter(i => tot = i.price + tot);
    return tot;
  }

}
