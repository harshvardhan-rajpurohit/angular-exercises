import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  getData(){
    return JSON.parse(localStorage.getItem("formData"));
  }

  setData(data:object){
    return localStorage.setItem("formData",JSON.stringify(data));
  }
}
