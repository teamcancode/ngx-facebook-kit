import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

declare const AccountKit;

@Injectable()
export class FacebookKitService {

  private readonly SCRIPT_URL = 'https://sdk.accountkit.com/<languge>/sdk.js';
  private readonly STATUS_NOT_INIT = 0;
  private readonly STATUS_INIT_FAILURE = 1;
  private readonly STATUS_INIT_SUCCESSFULLY = 2;
  private readonly isServer = typeof window === 'undefined' || Object.keys(window).length === 0;

  private _initStatus = this.STATUS_NOT_INIT;
  private _configs = {};
  private _language;

  constructor() {
    window['AccountKit_OnInteractive'] = () => {
      AccountKit.init(this._configs);
      this._initStatus = this.STATUS_INIT_SUCCESSFULLY;
    };
  }

  init(configs: {
    appId: string,
    state?: string,
    version?: string,
    fbAppEventsEnabled?: boolean,
    redirect?: string,
    debug?: boolean
  }, language: string = 'en_US'): void {
    this._language = language;

    this.initFacebookKitScript(() => {
      this._configs = configs;
    }, () => {
      this._initStatus = this.STATUS_INIT_FAILURE;
    });
  }

  loginPhone(countryCode: string, phoneNumber: string): Observable<any> {
    return this.login('PHONE', {countryCode: countryCode, phoneNumber: phoneNumber});
  }

  loginEmail(email: string): Observable<any> {
    return this.login('EMAIL', {emailAddress: email});
  }

  private get isNotInit() {
    return this.STATUS_NOT_INIT === this._initStatus;
  }

  private initFacebookKitScript(successCallback, errorCallback) {
    if (this.isServer) {
      return;
    }

    const script = document.createElement('script');

    script.src = this.SCRIPT_URL.replace('<languge>', this._language);

    script.onload = () => {
      if (successCallback) {
        successCallback();
      }
    };

    script.onerror = () => {
      if (errorCallback) {
        errorCallback();
      }
    };

    document.head.appendChild(script);
  }

  // noinspection JSMethodCanBeStatic
  private breakObservable(observer: Subscriber<any>, data = null) {
    observer.next(data);
    observer.complete();
  }

  private login(type: string, data: {}): Observable<any> {
    return new Observable(observer => {
      if (this.isNotInit) {
        this.breakObservable(observer, false);
        return;
      }

      AccountKit.login(type, data, (response) => {
        if (response.status === 'PARTIALLY_AUTHENTICATED') {
          this.breakObservable(observer, response);
        } else {
          observer.error(response);
        }
      });
    });
  }

}
