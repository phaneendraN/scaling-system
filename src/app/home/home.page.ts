import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public router: Router) {
    if (sessionStorage.getItem('user').toString() === 'authentic'){

    } else {
      this.router.navigateByUrl('login');
    }
  }

}
