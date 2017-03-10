import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from "./nav-routing.module";
import {AuthGuard} from "../core/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  declarations: [NavComponent],
  providers:[AuthGuard]
})
export class SharedModule { }
