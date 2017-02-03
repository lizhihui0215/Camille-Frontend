import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {

  user: User;
  repartpassword: string;

  constructor(userService: UserService) {
    this.user = userService.getUser();
    this.repartpassword = '';
  }

  ngOnInit() {
  }



  onSubmit() { console.log(this.user); }


}
