import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import {FormsModule} from "@angular/forms";
import {NotEmptyWaringDirective} from "../core/not-empty-waring.directive";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ],
  declarations: [InventoryComponent, InventoryListComponent, NotEmptyWaringDirective]
})
export class MainModule { }
