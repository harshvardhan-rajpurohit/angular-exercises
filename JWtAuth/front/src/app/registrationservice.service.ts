import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post<any>(environment.registerUri,user);
  }

  loginUsermethod(user){
    return this.http.post<any>(environment.loginUri,user);
  }

  getposts(){
    return this.http.get<any>(environment.postsUri)
  }

  getcomments(){
    return this.http.get<any>(environment.commentsUri)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
