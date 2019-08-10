import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GoogleMapsPageModule } from '../Maps/google-maps/google-maps.module';
import { GoogleMapsPage } from '../Maps/google-maps/google-maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
    ])
  ],
  exports:[RouterModule],
  declarations: [HomePage]
})
export class HomePageModule {}
