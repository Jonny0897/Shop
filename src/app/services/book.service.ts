import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Items } from 'src/assets/mock/items';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  node:AngularFireList<Items>;

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient,
  ) {
    this.node = this.db.list("books");
   }

  getBook(): Observable<Items[]> {
    return this.node.valueChanges();
  }

}
