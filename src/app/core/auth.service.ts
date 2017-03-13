import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {User} from './user';
import {Http} from '@angular/http';
import {ResponseObject} from './response-object';

@Injectable()
export class AuthService {
  private registerURL = 'http://localhost:8080/api/register';
  private loginURL = 'http://localhost:8080/api/login';
  set user(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }
  get user(){
    return JSON.parse(localStorage.getItem('user')) ;
  }

  get  isLoggedIn(){
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  set isLoggedIn(isLoggedIn: boolean) {
    localStorage.setItem('isLoggedIn' , 'true');
  }

  redirectUrl: string;


  constructor(private http: Http) {
    this.isLoggedIn = false;
  }
  login(username: string, password: string): Promise<ResponseObject<User>> {
    console.log('username: ' + username + 'password: ' + password);
    return this.http.post(this.loginURL, {'username' : username, 'password' : password}).toPromise()
      .then(response => {
      this.isLoggedIn = response.json().code === 0;
      const responseObject = response.json() as ResponseObject<User>;
      this.user = responseObject.result;
      return responseObject;
    }).catch(handleError);
  }

  register(user: User): Promise<ResponseObject<String>>  {
    console.log(user);
    return this.http.post(this.registerURL, user).toPromise().then(response => {
      return response.json() as ResponseObject<String>;
    }).catch(handleError);
  }
}

export function  handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
