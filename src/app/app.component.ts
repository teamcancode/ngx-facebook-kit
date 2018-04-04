import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  phone = {
    countryCode: '+84',
    phoneNumber: '',
  };

  email = '';

  // noinspection JSMethodCanBeStatic
  loginSuccess(response) {
    console.log('Success', response);
  }

  // noinspection JSMethodCanBeStatic
  loginError(response) {
    console.log('Error', response);
  }

}
