import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/assets/mock/items';
import { ITEMS } from 'src/assets/mock/mock-items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = ITEMS;
  productFilters: string = 'all';
  filterProduct: Items[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.items.length;
  }

  getNovels() {
    return this.items.filter(product => product.type == "novels").length;
  }

  getManga() {
    return this.items.filter(product => product.type == "manga").length;
  }

  onFilterRadioChanged(dataFilter: string) {
    return this.productFilters = dataFilter;
  }

}
