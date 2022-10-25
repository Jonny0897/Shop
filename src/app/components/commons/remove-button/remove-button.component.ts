import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Items } from 'src/assets/mock/items';

@Component({
  selector: 'remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css']
})
export class RemoveButtonComponent implements OnInit {

  @Output()
  bookRemoved: EventEmitter<Items> = new EventEmitter<Items>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  remove() {
    this.cartService.removeFromCart();
  }

}
