import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFacebookKitPhoneDirective } from './directives/login-facebook-kit-phone.directive';
import { LoginFacebookKitEmailDirective } from './directives/login-facebook-kit-email.directive';
import { FacebookKitService } from './services/facebook-kit.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FacebookKitService,
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
export class FacebookKitModule {
}
