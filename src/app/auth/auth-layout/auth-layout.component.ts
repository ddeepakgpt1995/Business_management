import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  authForm!: FormGroup;
  pathUrl:any

constructor(private fb:FormBuilder,
  private route:ActivatedRoute,
  private router:Router){
  this.authForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
})
}

 ngOnInit(): void {
  this.pathUrl=this.route.snapshot.routeConfig?.path;
  console.log(this.pathUrl)
}


  onSubmit(){
    this.router.navigate(['/dashboard'])
  }
}
