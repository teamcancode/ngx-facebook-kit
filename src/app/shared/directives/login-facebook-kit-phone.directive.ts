import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FacebookKitService } from '../services/facebook-kit.service';

@Directive({
  selector: '[ngxLoginFacebookKitPhone]'
})
export class LoginFacebookKitPhoneDirective {

  @Input() ngxLoginFacebookKitPhone: { countryCode: string, phoneNumber: string };

  @Output() successEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() errorEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click') onClick() {
    this._facebookKitService
        .loginPhone(this.ngxLoginFacebookKitPhone.countryCode, this.ngxLoginFacebookKitPhone.phoneNumber)
        .subscribe((response) => {
          this.successEvent.emit(response);
        }, (error) => {
          this.errorEvent.emit(error);
        });
  }

  constructor(private _facebookKitService: FacebookKitService) {
  }

}
