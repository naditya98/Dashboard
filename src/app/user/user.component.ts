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
    this.userList = this.userService.returnuser();
  }
  deleteRow(user:any){
    const index = this.userList.indexOf(user);
    this.userList.splice(index, 1);
}
}
