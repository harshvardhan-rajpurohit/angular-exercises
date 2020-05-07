import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  template: '<img border="0" width="50" height="50" src=\"{{ params.value }}\">',
})
export class ImageFormatterComponent {
  params: any;
  constructor() { }

  agInit(params: any){
    this.params = params; 
  } 

}
