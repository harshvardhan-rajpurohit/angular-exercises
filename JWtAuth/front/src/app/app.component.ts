import { Component } from '@angular/core';
import { RegistrationserviceService } from './registrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public _service:RegistrationserviceService, private _router:Router ){}

  logoutUser(){
    localStorage.removeItem ('token');
    this._router.navigate(['/posts'])
  }
  title = 'front';
}
