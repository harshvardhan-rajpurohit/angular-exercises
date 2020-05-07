import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsFetched=[]
  errorMessage=''
  constructor(private _service:RegistrationserviceService,private _router:Router) { }

  ngOnInit(): void {
    this._service.getcomments()
    .subscribe(
      data=>{this.commentsFetched=data },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.errorMessage=err.message
            window.alert('You need to link.')
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
