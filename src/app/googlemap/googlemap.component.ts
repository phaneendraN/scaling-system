import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss'],
})

export class GooglemapComponent{
  @ViewChild('map',{static: true}) mapElement: ElementRef<any>;

  map: any;

  constructor() { }

  ngOnInit() {
   this.initmap();
  }

  initmap() {
    const cords = new google.maps.LatLng(45, 100);
    const options: google.maps.MapOptions = {
      center: cords,
      zoom : 15,
      mapTypeId  : google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

  }

}
