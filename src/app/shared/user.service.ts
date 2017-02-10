import { Injectable } from '@angular/core';
import {User} from './user';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ResponseObject } from '../core/response-object';


@Injectable()
export class UserService {

  private registerURL = 'http://localhost:8080/api/register';
  private loginURL = 'http://localhost:8080/api/login';

  constructor(private http: Http) {}

  getUser() {
    return new User('1', '2', '3', '4', '5', '6', '7', 0);
  }

  login(username: string, password: string): Promise<ResponseObject<User>> {
    console.log('username: ' + username + 'password: ' + password);
    return this.http.post(this.loginURL, {'username' : username, 'password' : password}).toPromise().then(response => {
      return response.json() as ResponseObject<User>;
    }).catch(this.handleError);
  }

  register(user: User): Promise<ResponseObject<String>>  {
    console.log(user);
    return this.http.post(this.registerURL, user).toPromise().then(response => {
      return response.json() as ResponseObject<String>;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
