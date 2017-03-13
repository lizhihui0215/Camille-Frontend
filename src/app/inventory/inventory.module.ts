import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryInputListComponent } from './inventory-input-list/inventory-input-list.component';
import {FormsModule} from '@angular/forms';
import {NotEmptyWaringDirective} from '../core/not-empty-waring.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InventorySearchListComponent } from './inventory-search-list/inventory-search-list.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [InventoryInputListComponent, NotEmptyWaringDirective, InventorySearchListComponent]
})
export class InventoryModule { }
