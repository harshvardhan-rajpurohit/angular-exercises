import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router} from '@angular/router'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styles: ['']
})
export class DisplayTableComponent implements OnInit {

  public fetchedData=[];
  public dataDelete;
  errorMsg=''
  constructor(private _userService: DataServiceService, private router: Router) { }

  ondelete(event){
    var res = window.confirm("Are you sure You want to delete this data?")
    let fname = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    let lname = event.target.parentElement.previousElementSibling.previousElementSibling.innerText
    if(res)    this._userService.deleteData(fname,lname)
    .subscribe(data => this.dataDelete = data)
    let demo={};
    this.fetchedData.forEach(elem =>{
      if(elem.firstName === fname){
        demo=elem;
      }
    })
    this.fetchedData.splice(this.fetchedData.indexOf(demo),this.fetchedData.indexOf(demo)+1)
  }

  onedit(event){
  this.navigateAdd()
  let btnValue="Update";
  let fname = event.target.parentElement.previousElementSibling.previousElementSibling.innerText
  let lname = event.target.parentElement.previousElementSibling.innerText
  this._userService.updateEvent(btnValue,fname,lname,this.fetchedData);
  }
  
  editTDF(event){
    let fname = event.target.parentElement.previousElementSibling.previousElementSibling.innerText
    this.fetchedData.forEach(elem =>{
      if(elem.firstName === fname){
        this.router.navigate(['/edit',elem._id])
      }
    })
  }

  navigateAdd(){
    this.router.navigate(['/add'])
  }

  ngOnInit(): void {
    this._userService.getData()
    .subscribe(
      data => this.fetchedData = data,
      error=> this.errorMsg=error.statusText)
      
    // if(this._userService.subsVar2 == undefined){
    //   this._userService.subsVar2 = this._userService.newEvent.subscribe((newArr)=>{
    //     console.log(newArr)
    //   })
    // }
  }

}
