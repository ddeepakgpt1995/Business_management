import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  constructor(private fb:FormBuilder){
  }
  authForm:FormGroup=this.fb.group({
    firstName:[''],
    lastName:[''],
    mobile:[''],
    profile:[''],
    email:[''],
    Password:['']
  })


  onSubmit(){

  }
}
