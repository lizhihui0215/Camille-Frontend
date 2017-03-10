import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private userService: AuthService) { }

  @Input() alert: IAlert = {hidden: true, type: 'danger', message: ''};

  ngOnInit() {

  }

  login(username: string, password: string){

    // this.userService.login(username, password).sub

    this.userService.login(username, password).then(response => {
      if (response.code == 0){
        this.route.navigate(['nav']);
      }else {
        this.alert.hidden = false;
        this.alert.message = response.message;
      }
    })
  }
}

export interface IAlert {
  hidden: boolean;
  type: string;
  message: string;
}
