import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser = {email:'',password:''}
  errorMessage=''
  constructor(private _regService: RegistrationserviceService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._regService.registerUser(this.registeredUser)
    .subscribe(
      data => {
        localStorage.setItem('token',data.token)
        this._router.navigate(['/comments'])
      },
      error =>this.errorMessage=error.message
    )
  }

}
