import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class userService {
  
  userData : Array<any> =[];
  constructor(private http:HttpClient) { }

  adduser(data:any){
    return this.http.post(`https://60c770c3afc88600179f51dc.mockapi.io/user`,data)
  }

  returnuser(){
    return this.http.get(`https://60c770c3afc88600179f51dc.mockapi.io/user`)
  }

  returnuserById(id:number){
    return this.http.get(`https://60c770c3afc88600179f51dc.mockapi.io/user/${id}`)
  }

  updateuserById(id:any,data:any){
    return this.http.put(`https://60c770c3afc88600179f51dc.mockapi.io/user/${id}`,data)
  }
  deletById(id: any){
    return this.http.delete(`https://60c770c3afc88600179f51dc.mockapi.io/user/${id}`)
  }
}