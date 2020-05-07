import { Component,ViewChild, ViewContainerRef,ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-ag-grid';
  componentRef:any;
  @ViewChild('dynamicComponents',{read:ViewContainerRef}) target:ViewContainerRef;

  constructor(private resolver:ComponentFactoryResolver){}
  
  createComps(){
    // this.target.clear();
    const factory = this.resolver.resolveComponentFactory(DynamicCompComponent)
    this.componentRef= this.target.createComponent(factory);
  }
}
