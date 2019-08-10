import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoogleMapsPage } from './google-maps.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([]),
    
  ],
  declarations: [ GoogleMapsPage ],
  exports:[ GoogleMapsPage ]
})
export class GoogleMapsPageModule {}
