import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
emailid="";
pass=""
  constructor(private _formbuilder:FormBuilder) { }

  loginForm = this._formbuilder.group({
    emailid:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }
  
  onsubmit(){
    console.log(this.loginForm.value)
  }

}
