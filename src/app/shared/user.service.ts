import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {
  constructor() {}
  getUser() {
    return new User(1, '1', '2', '3', '4', '5', '6', '7', 0);
  }
}
