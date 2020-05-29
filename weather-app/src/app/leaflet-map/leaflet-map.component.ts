import { Component, OnInit } from '@angular/core';
import { latLng,tileLayer,Map } from "leaflet";
import * as L from "leaflet";

var map,mainMarker;
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})

export class LeafletMapComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
     map = L.map('map').setView([21.172910, 72.961320], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mainMarker = L.marker([21.172910, 72.961320],{draggable:true}).addTo(map)
    // mainMarker.bindPopup(`Position: ${mainMarker.getLatLng()}`)
    mainMarker.on('dragend',this.getLatsLongs)
    mainMarker.bindPopup(`Position: ${mainMarker.getLatLng()}`)

  }

  getLatsLongs(){
    mainMarker.bindPopup(`Position: ${mainMarker.getLatLng()}`)
    console.log(mainMarker.getLatLng())
  }
}
