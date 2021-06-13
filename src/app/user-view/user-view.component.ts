import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class userViewComponent implements OnInit {
  fb:FormBuilder = new FormBuilder;
  userForm:any;
  currentId:any;
  constructor(private activeRoute:ActivatedRoute , private userService:userService , private route:Router) { 
    this.currentId = activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    let currentuserData = this.userService.returnuserById(this.currentId)
    this.userForm = this.fb.group({
      "username" : this.fb.control("",Validators.required),
      "userprice" : this.fb.control(0,Validators.required),
      "discount" : this.fb.control(0,[Validators.required]),
      "type":this.fb.control("")
    })

    this.userForm.patchValue(currentuserData)
  }
  viewForm(){
    
  }

}
