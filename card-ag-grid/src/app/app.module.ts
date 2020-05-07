import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { ImageFormatterComponent } from './image-formatter/image-formatter.component';
import { NgxPrintModule } from "ngx-print";
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AgGridComponent,
    ImageFormatterComponent,
    DynamicCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    AgGridModule.withComponents([ImageFormatterComponent] ),
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DynamicCompComponent]
})
export class AppModule { }
