import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryProductComponent } from './inventory-list/inventory-product/inventory-product.component';
import { InventoryInputComponent } from './inventory-input/inventory-input.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryProductComponent,
    InventoryInputComponent
  ]
})
export class InventoryModule { }
