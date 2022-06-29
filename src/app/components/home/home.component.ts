import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/app/assets/mock/mock-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = ITEMS;
  searchText: string = '';
  productFilters: string = 'all';

  constructor() {
  }

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

  onFilterRadioChanged(dataFilter: string) {
    return this.productFilters = dataFilter;
  }

  onSearchTextEntered(dataText: string){
    this.searchText = dataText;
  }


}
