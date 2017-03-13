import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import { NotEmptyWaringDirective } from './not-empty-waring.directive';
import {ProductService} from "./product.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  providers: [AuthService, ProductService]
})
export class CoreModule { }
