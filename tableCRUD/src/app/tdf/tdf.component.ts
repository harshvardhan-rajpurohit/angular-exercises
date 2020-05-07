import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserModule } from '../user-module';
import { DataServiceService } from '../data-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  userModel = new UserModule("","","");
  
  @ViewChild('btn') addBtn: ElementRef;
  id;
  errorMsg='';

  constructor(
    private _userService:DataServiceService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      if(params.get('id') != null){
         this.id = params.get('id')
        this._userService.getTDF(this.id)
        .subscribe(
          data=>{ 
            console.log("data Received: "+data)
            this.userModel.firstName = data[0].firstName
            this.userModel.lastName =  data[0].lastName
            this.addBtn.nativeElement.innerText="Update"
          },
          error =>  this.errorMsg=error.statusText
        )
      }
      
    })
  }

  onSubmit(){
    console.log(this.addBtn.nativeElement)
    if(this.addBtn.nativeElement.innerText =="Add"){
    this._userService.postTDF(this.userModel)
    .subscribe(
      data => console.log("Data Entered Successfully!--",data),
      error => this.errorMsg=error.statusText)
      this.router.navigate(['/home']);
    }
    else {
      this.userModel._id=this.id;
     this._userService.updateTDF(this.userModel)
     .subscribe(
      data => console.log("Data Updated Successfully!--",data),
      error =>  this.errorMsg=error.statusText)
      this.router.navigate(['/home']); 
    }
    
    }
    
}
