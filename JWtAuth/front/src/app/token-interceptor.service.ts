import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegistrationserviceService } from './registrationservice.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next){
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + this.fetchToken())
      }
    )
    return next.handle(tokenizedReq);
  }

  fetchToken(){
    return this.injector.get(RegistrationserviceService).getToken()
  }

}
