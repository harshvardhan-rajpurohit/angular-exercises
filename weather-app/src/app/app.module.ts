import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from "@agm/core";
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    LeafletMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDqllc-9UhojI9tCr6O9PG6Z1b0W9Z37OM'
    }),
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
