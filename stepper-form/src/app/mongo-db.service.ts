import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(private http: HttpClient) { }

  manipulateData(form1data,form2data){
    let manipulatedData = {
      "firstname":form1data.fname,
      "lastname":form1data.lname,
      "phone":form1data.phone,
      "email":form1data.email,
      "address":{
        "apartment":form2data.apt,
        "city":form2data.city,
        "state":form2data.state,
      },
      "pin":form2data.pin,
    }
    return manipulatedData;
  }

  storeData(data):Observable<any>{
    console.log(data);
  return this.http.post('http://localhost:3000/api/addData',data);
  }

}
