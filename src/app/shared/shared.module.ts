import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav-routing.module';
import {AuthGuard} from '../core/auth-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule,
    NgbModule
  ],
  declarations: [NavComponent],
  providers: [AuthGuard]
})
export class SharedModule { }
