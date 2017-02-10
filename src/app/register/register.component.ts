import {Component, OnInit, AfterViewInit} from '@angular/core';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {

  user: User;
  repartpassword: string;

  constructor(public userService: UserService, public router: Router) {
    this.user = userService.getUser();
    this.repartpassword = '';
  }

  ngOnInit() {}


  ngAfterViewInit(): void {
  }

  onSubmit(): void {
    this.userService.register(this.user).then(result => {
      if (0 === result.code) {
        this.router.navigate(['/']);
      }
    });
  }
}
