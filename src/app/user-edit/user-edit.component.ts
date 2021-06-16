import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class userEditComponent implements OnInit {
  
  fb:FormBuilder = new FormBuilder;
  userForm:any;
  currentId:any;
  currentuserData:any;
  constructor(private activeRoute:ActivatedRoute , private userService:userService , private route:Router) { 
    this.currentId = activeRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      "username" : this.fb.control("",Validators.required),
      "userprice" : this.fb.control(0,Validators.required),
      "discount" : this.fb.control(0,Validators.required),
      "type":this.fb.control("")
    })
    this.userService.returnuserById(this.currentId).subscribe((res)=>{
      this.currentuserData =res
      this.userForm.patchValue(this.currentuserData)
    })
    
  }
  updateForm(){
    this.userService.updateuserById(this.currentId,this.userForm.value).subscribe(()=>{
      this.route.navigate(["dashboard/user"]);
    })
    
  }

}

function currentuserData(currentuserData: any) {
  throw new Error('Function not implemented.');
}
