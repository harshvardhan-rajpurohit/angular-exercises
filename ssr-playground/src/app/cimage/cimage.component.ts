import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cimage',
  template: `
  <img [defaultImage]="defaultImage" [lazyLoad]="image">
  `,
  styles: [`
  img.ng-lazyloaded { 
    animation: fadein .5s;
  }@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; } 
  }
  `]
})
export class CimageComponent implements OnInit {
  defaultImage = "https://unsplash.com/photos/2FPjlAyMQTA"
  image = "https://unsplash.com/photos/F2eHfMwIOxA"
  constructor() { }

  ngOnInit(): void {
  }

}
