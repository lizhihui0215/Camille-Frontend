import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router, public userServices: UserService) { }

  ngOnInit() {

  }

  onSubmit(username: string, password: string): void {
    this.userServices.login(username, password).then( response => {
      if (response.code === 0) {
        this.route.navigate(['navigation']);
      }
    });
  }

}
