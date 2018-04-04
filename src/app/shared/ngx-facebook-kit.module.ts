import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFacebookKitPhoneDirective } from './directives/login-facebook-kit-phone.directive';
import { LoginFacebookKitEmailDirective } from './directives/login-facebook-kit-email.directive';
import { NgxFacebookKitService } from './services/ngx-facebook-kit.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgxFacebookKitService,
  ],
  declarations: [
    LoginFacebookKitPhoneDirective,
    LoginFacebookKitEmailDirective,
  ],
  exports: [
    LoginFacebookKitPhoneDirective,
    LoginFacebookKitEmailDirective,
  ]
})
export class NgxFacebookKitModule {
}
