import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { userData } from './userData';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserModule } from './user-module';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
changeEvent = new EventEmitter();
newEvent = new EventEmitter();
 subsVar: Subscription;
 subsVar2: Subscription;

 mainData=[]
  constructor(private http: HttpClient) { }

  getData(): Observable<userData[]>{
    return this.http.get<userData[]>(environment.getUri)
    .pipe(catchError(this.errorHandler))
  }

  postData(data:object): Observable<userData[]>{
     return this.http.post<userData[]>(environment.postUri,data)     
  }


  deleteData(fname:string,lname:string): Observable<any>{
    const params = new HttpParams()
    .set('firstName',fname)
    .set('lastName',lname)
    return this.http.delete(environment.deleteUri,{params})
  }
  
  putData(data): Observable<userData>{
    return this.http.post<userData>(environment.putUri,data)     
 }

  updateEvent(btnValue:string,fname:string,lname:string,tableData){
    this.mainData= tableData;
    let data = {"firstname":fname,"lastname":lname,btnValue}
    this.changeEvent.emit(data);
  }

  addUpdateArr(data){
    this.newEvent.emit(data);
    console.log(data);
  }  


  // ------------------------------------------ TDF methods

  postTDF(user:UserModule){
   return this.http.post<any>(environment.postUri,user)
   .pipe(catchError(this.errorHandler))

  }

  getTDF(id:string):Observable<any>{
    return this.http.get(environment.getUri+id)
    .pipe(catchError(this.errorHandler))
  }
  
  updateTDF(user:UserModule){
    return this.http.put<any>(environment.getUri,user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
