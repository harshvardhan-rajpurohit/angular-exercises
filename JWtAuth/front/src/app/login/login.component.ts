import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser={email:null,password:null}
  errorMessage=''
  constructor(private _service: RegistrationserviceService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginuser(){
    this._service.loginUsermethod(this.loginUser)
    .subscribe(
      data =>{
        localStorage.setItem('token',data.token)
        this._router.navigate(['/comments'])
    },
      error => this.errorMessage=error.message
    )
  }

}
