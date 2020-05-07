import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationserviceService } from './registrationservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _service: RegistrationserviceService,private _router:Router){}

  canActivate():boolean{
    if(this._service.loggedIn()){
      return true;
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }
}
