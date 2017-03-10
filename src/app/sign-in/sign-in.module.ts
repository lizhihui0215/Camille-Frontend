import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginComponent } from './login/login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../core/auth.service";

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [LoginComponent],
})
export class SignInModule { }
