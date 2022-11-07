import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output()
  filterRadioChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButtonValue: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }


  onRadioChanged() {
    this.filterRadioChanged.emit(this.selectedRadioButtonValue);
  }



}
