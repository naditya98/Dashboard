import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {

  userData : Array<any> =[];
  constructor() { }

  adduser(data:any){
    data.id= this.userData.length+1;
    this.userData.push(data);
  }

  returnuser(){
    return this.userData;
  }

  returnuserById(id:number){
    return this.userData.find(p => p.id == id);
  }

  updateuserById(id:any,data:any){
    let index = this.userData.findIndex(p =>p.id == id);
    data.id=id;
    this.userData[index] = data ;
  }
}