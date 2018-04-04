import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FacebookKitService } from '../services/facebook-kit.service';

@Directive({
  selector: '[ngxLoginFacebookKitEmail]'
})
export class LoginFacebookKitEmailDirective {

  @Input() ngxLoginFacebookKitEmail: string;

  @Output() successEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() errorEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click') onClick() {
    this._facebookKitService
        .loginEmail(this.ngxLoginFacebookKitEmail)
        .subscribe((response) => {
          this.successEvent.emit(response);
        }, (error) => {
          this.errorEvent.emit(error);
        });
  }

  constructor(private _facebookKitService: FacebookKitService) {
  }

}
