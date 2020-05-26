import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CimageComponent } from "./../cimage/cimage.component";

import { LazyLoadImageModule,intersectionObserverPreset } from "ng-lazyload-image";


@NgModule({
  declarations: [CustomersComponent,CimageComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    LazyLoadImageModule.forRoot({
      preset:intersectionObserverPreset
    })
  ]
})
export class CustomersModule { }
