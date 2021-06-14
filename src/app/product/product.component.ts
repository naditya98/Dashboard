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
    this.loadProduct()
  }
  loadProduct(){
    this.productService.returnProduct().subscribe((res:any)=>{
      this.productList=res
    });
  }
  deletprod(id:any){
    this.productService.deletById(id).subscribe(() =>{
      this.loadProduct()
    });
}
}
