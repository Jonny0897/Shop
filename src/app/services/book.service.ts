import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/assets/mock/items';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBook(): Observable<Items[]> {
    return this.http.get<Items[]>("https://shop-351b7-default-rtdb.europe-west1.firebasedatabase.app/books.json");
  }


}
