import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {
  
  @ViewChild('fname') fnameref: ElementRef;
  @ViewChild('lname') lnameref: ElementRef;
  @ViewChild('btn') addBtn: ElementRef;

  public dataPost;
  public dataPutOld;
  public dataupdated;

  constructor(private _userService:DataServiceService, private router: Router) { }

  onsubmit(event,addbtn) { 
    if(addbtn.value=="Add"){
      var data = {"firstName":event.target[0].value,"lastName":event.target[1].value}
      this._userService.postData(data).subscribe(data=>this.dataPost = data)
      this._userService.getData().subscribe(data=>this.dataupdated = data)
      this._userService.addUpdateArr(this.dataupdated);
    }
    else {
      addbtn.value="Add";
      if(event.target[0].value.length>0 && event.target[1].value.length>0){
        this._userService.mainData.forEach(e=>{
          if(e.firstName=== this.dataPutOld.firstname){
            let dataN = {"_id":e._id,"firstName":event.target[0].value,"lastName":event.target[1].value}
            this._userService.putData(dataN).subscribe(data=>this.dataPutOld = data);
            e = this.dataPutOld;
          }
        })
      }
      else {
        console.log("Check the data again!")
      }
    }
    this.router.navigate(['/home'])
     event.preventDefault();
  }

  updateValues(fieldsData){
    this.dataPutOld=fieldsData;
    this.addBtn.nativeElement.value=fieldsData.btnValue
    this.fnameref.nativeElement.value= fieldsData.firstname
    this.lnameref.nativeElement.value= fieldsData.lastname
    console.log(this.addBtn.nativeElement,this.fnameref.nativeElement)
  }

  
  ngOnInit(): void {
    if(this._userService.subsVar == undefined){
      this._userService.subsVar = this._userService.changeEvent.subscribe((sentData:object)=>{
        this.updateValues(sentData)
      })
    }
  }

}
