import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.page.html',
  styleUrls: ['./google-maps.page.scss'],
})

export class GoogleMapsPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef<any>;

  map: any;
  constructor(private geolocation: Geolocation) {

  }

  ngOnInit() {
    this.getGeoLocation();
    this.initmap();
  }

  getGeoLocation() {
    const options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };



  }

  OnSuccess(pos): void {
    console.log(pos);
  }

  OnError(err) {
    console.log(err);
  }


  initmap() {

    this.geolocation.getCurrentPosition().then(res => {
      const cords = new google.maps.LatLng(res.coords.latitude, res.coords.longitude);
      const options: google.maps.MapOptions = {
        center: cords,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, options);
      this.addMarker(this.map);
    });
  }

  addMarker(map: any) {

    const marker = new google.maps.Marker({
      // tslint:disable-next-line: object-literal-shorthand
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {

    const infoWindow = new google.maps.InfoWindow({
      // tslint:disable-next-line: object-literal-shorthand
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
