import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public notifySubject= new Subject()



  // dependency injection
  constructor(private http:HttpClient) { }

  getProducts(){
    // return fetch("https://fakestoreapi.com/products")

    return this.http.get("https://fakestoreapi.com/products")


    
  }

  getCategories(){

    // return fetch("https://fakestoreapi.com/products/categories")
    return this.http.get("https://fakestoreapi.com/products")

  }

dispatchMessage(message:any){

  // console.log(message);

  this.notifySubject.next(message)
  
}
}
