import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData : Array<any> =[];
  constructor(private http:HttpClient) {}

  addProduct(data:any){
    return this.http.post(`https://60c770c3afc88600179f51dc.mockapi.io/aplha`,data)
  }

  returnProduct(){
    return this.http.get(`https://60c770c3afc88600179f51dc.mockapi.io/aplha`)
  }

  returnProductById(id:number){
    return this.http.get(`https://60c770c3afc88600179f51dc.mockapi.io/aplha/${id}`)
  }

  updateProductById(id:any,data:any){
    return this.http.put(`https://60c770c3afc88600179f51dc.mockapi.io/aplha/${id}`,data)
  }
  deletById(id: any){
    return this.http.delete(`https://60c770c3afc88600179f51dc.mockapi.io/aplha/${id}`)
  }
}