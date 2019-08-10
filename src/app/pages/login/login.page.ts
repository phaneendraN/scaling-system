import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  todo: any = {
    user: '',
    password: ''
  };

  constructor(public alertController: AlertController,public router:Router) { }

  ngOnInit() {
  }

  OnClearInputs() {
    this.todo.user = '';
    this.todo.password = '';
  }


  logForm() {
    if (this.todo.user !== '' && this.todo.password !== '' ) {
        if (this.todo.user === 'admin' && this.todo.password === 'admin'){
          this.presentAlert();
        }
    }
  }

  presentAlert() {
    const alert = this.alertController.create({
    message: 'Login Successful',
    subHeader: 'user login successful',
    buttons: [{
      text: 'Okay',
      handler: () => {
        console.log('Confirm Okay');
        sessionStorage.setItem('user','authentic');
        this.router.navigateByUrl('/home');
      } 
      }] 
     }).then( alert => alert.present());
  }

}
