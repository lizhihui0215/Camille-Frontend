import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from "./inventory/inventory.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule { }
