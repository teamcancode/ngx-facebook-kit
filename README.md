# Ngx Facebook Account Kit

This module is used for [Angular 5](https://angular.io/).  
This module help you to use [Facebook Account Kit](https://developers.facebook.com/docs/accountkit/webjs) as service.  

How to use:
-------------
### Installation:
```html
npm install ngx-facebook-kit
```
    
### Import service:
Edit in `src/app/app.module.ts`:
```typescript
//...
import { NgxFacebookKitModule, NgxFacebookKitService } from 'ngx-facebook-kit';

const facebookKitLanguage = environment.facebookKit.language;

const facebookKitConfigs = {
  appId: '<appId>',
  state: '<state>',
  version: '<version>',
  fbAppEventsEnabled: '<fbAppEventsEnabled>',
  debug: '<debug>',
  redirect: '<redirect>',
  display: '<display>'
};

@NgModule({
  //...
  imports: [
    //...
    NgxFacebookKitModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngxFcebookKitService: NgxFacebookKitService) {
    ngxFcebookKitService.init(facebookKitConfigs, facebookKitLanguage);
  }

}
```

And call in component:
```typescript
constructor(private _ngxFacebookKitService: NgxFacebookKitService) {
}
```

### Login using phone
```html
<!-- Using directive -->
<button [ngxLoginFacebookKitPhone]="{countryCode: '+84', phoneNumber: '0909999999'}"
		(successEvent)="loginSuccess($event)"
		(errorEvent)="loginError($event)">
```

```typescript
//Using controller
login() {
    this._ngxFacebookKitService
        .loginPhone('+84', '0909999999')
        .subscribe((response) => {}, (error) => {});
}
```

### Login using email
```html
<!-- Using directive -->
<button [ngxLoginFacebookKitEmail]="'teamcancode@localhost.com'"
		(successEvent)="loginSuccess($event)"
		(errorEvent)="loginError($event)">
```

```typescript
//Using controller
login() {
    this._ngxFacebookKitService
        .loginEmail('teamcancode@localhost.com')
        .subscribe((response) => {}, (error) => {});
}
```
