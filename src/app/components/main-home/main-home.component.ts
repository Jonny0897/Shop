import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/app/assets/mock/mock-items';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  items = ITEMS;
  searchText: string = '';
  productFilters: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.items.length;
  }

  getProduct1() {
    return this.items.filter(product => product.type == "product1").length;
  }

  getProduct2() {
    return this.items.filter(product => product.type == "product2").length;
  }

  onSearchTextEntered(dataText: string){
    this.searchText = dataText;
  }

  onFilterRadioChanged(data: string) {
    this.productFilters = data;
  }

}
