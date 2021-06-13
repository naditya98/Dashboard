import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from '../user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class userCreateComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  userForm:any;
  constructor(private userService:userService , private route:Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      "username" : this.fb.control("",Validators.required),
      "userprice" : this.fb.control(0,Validators.required),
      "discount" : this.fb.control(0,Validators.required),
      "type":this.fb.control("")
    })
  }
  submitForm(){
    this.userService.adduser(this.userForm.value);
    this.route.navigate(["/user"])
  }

}
