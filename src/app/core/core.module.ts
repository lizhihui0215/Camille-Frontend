import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import { NotEmptyWaringDirective } from './not-empty-waring.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  ],
  providers: [AuthService]
})
export class CoreModule { }
