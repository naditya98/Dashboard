import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList : Array<any> =[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.returnProduct();
  }
  deleteRow(product:any){
    const index = this.productList.indexOf(product);
    this.productList.splice(index, 1);
}

}
