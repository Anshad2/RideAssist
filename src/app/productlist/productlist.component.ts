import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  products:any

  constructor(private service:StoreService){

    // this.service.getProducts().then(res=> res.json()).then(res=>{
    //   this.products=res
      
    // })

    this.service.getProducts().subscribe(data=>this.products=data)

  }

}
