import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/app/assets/mock/mock-items';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  
  items = ITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
