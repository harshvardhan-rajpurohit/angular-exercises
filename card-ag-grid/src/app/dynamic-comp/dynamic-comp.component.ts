import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit {
  id =  Math.random().toString(8).substr(2,5);
  text = Math.random().toString(32).substr(2,16);
  constructor() { }

  ngOnInit(): void {
  }

}
