import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgxFacebookKitModule } from './shared/ngx-facebook-kit.module';
import { FormsModule } from '@angular/forms';
import { NgxFacebookKitService } from './shared/services/ngx-facebook-kit.service';
import { environment } from '../environments/environment';

const facebookKitLanguage = environment.facebookKit.language;

const facebookKitConfigs = {
  appId: environment.facebookKit.configs.appId,
  state: environment.facebookKit.configs.state,
  version: environment.facebookKit.configs.version,
  fbAppEventsEnabled: environment.facebookKit.configs.fbAppEventsEnabled,
  debug: environment.facebookKit.configs.debug
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxFacebookKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngxFacebookKitService: NgxFacebookKitService) {
    ngxFacebookKitService.init(facebookKitConfigs, facebookKitLanguage);
  }

}
