import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { StorageService } from "./storage-service";
import {LoginHttpService} from "./login-http-service";

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  API_URL = "http://192.168.6.201:8080/webapi/checkLogin/";

  constructor(public http: Http, private httpService: LoginHttpService, private storageService:StorageService) {
    console.log('Hello LoginService Provider');
  }


    login(user) {
        var url = this.API_URL + "/UserLogin.json";
        return this.httpService.httpPostNoAuth(url, user);
    }

}
