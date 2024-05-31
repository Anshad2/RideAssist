import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories:any

  constructor(private service:StoreService){

    // this.service.getCategories().then(res=>res.json()).then(res=>{
    //   this.categories=res

    // })

    this.service.getCategories().subscribe(data=>this.categories=data)


  }

}
