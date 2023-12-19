import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authForm:FormGroup;
  constructor(private fb: FormBuilder,
    private route: Router) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      
    })
  }
  ngOnInit(): void {

  }


  onSubmit() { 
    this.route.navigate([''])
  }
}
