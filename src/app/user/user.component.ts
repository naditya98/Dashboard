import { Component, OnInit } from '@angular/core';
import { userService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class userComponent implements OnInit {
  userList : Array<any> =[];
  constructor(private userService:userService) { }

  ngOnInit(): void {
    this.loaduser()
  }
  loaduser(){
    this.userService.returnuser().subscribe((res:any)=>{
      this.userList=res
    });
  }
  deletuser(id:any){
    this.userService.deletById(id).subscribe(() =>{
      this.loaduser()
    });
  }
}
