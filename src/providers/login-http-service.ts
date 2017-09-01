import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StorageService } from "./storage-service";
import { UserInfoData } from "./../model/UserInfoData";  //model

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginHttpService {
  myInfoLocal: any;
  local: Storage;

  constructor(public http: Http, private storageService: StorageService) {
    console.log('Hello HttpService Provider');
    //this.local = new Storage(LocalStorage);
  }

  public httpGetWithAuth(url: string) {
    let user = this.storageService.read<UserInfoData>('UserInfo');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', user.ID + '-' + user.UserToken);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpGetNoAuth(url: string) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpPostNoAuth(url: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpPostWithAuth(body: any, url: string) {

    return this.myInfoLocal = this.local.getJson('UserInfo')
      .then((result) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', result.ID + '-' + result.UserToken);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options).toPromise();
      });
  }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
