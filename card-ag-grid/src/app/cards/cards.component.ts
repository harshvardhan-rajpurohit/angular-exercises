import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(private http:HttpClient,private _service:DbserviceService) {  }
  jsonData:any = []
  p:number = 1;
  
  ngOnInit(): void {
    // this.http.get("assets/data.json")
    // .subscribe(
    //   data => {
    //     this.jsonData = data
    //     // console.log(this.jsonData)
    //   }
    // )
    this._service.getData(1)
    .subscribe(
      data => {
            this.jsonData = data
            // console.log(this.jsonData)
          }
    )
  }

  forward(){
    let id= this.jsonData[0].id+10;
    if(id<500){
    this._service.getData(id)
    .subscribe(
      data => {
        this.jsonData = data
        // console.log(this.jsonData)
      }
    )}
    else {
      window.alert("Limit Reached! No more data to fetch!")
    }
  }

  backward(){
    let id = this.jsonData[0].id-10;
    if(id>=1){
    this._service.getData(id)
    .subscribe(
      data => {
        this.jsonData = data
        // console.log(this.jsonData)
      }
    )
  }
  else{
    window.alert("Limit Reached! The data starts from here!")
  }
}

}
