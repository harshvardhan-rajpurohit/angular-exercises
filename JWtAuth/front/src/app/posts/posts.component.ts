import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsFetched=[]
  errorMessage=''
  constructor(private _service:RegistrationserviceService) { }

  ngOnInit(): void {
    this._service.getposts()
    .subscribe(
      data=>{
        this.postsFetched=data
        // console.log(data)
      },
       error => {
         this.errorMessage=JSON.stringify(error.message)
       }
    )
  }

}
