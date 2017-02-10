import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {InventoryInputComponent} from "./inventory-input/inventory-input.component";

const routes: Routes = [
  {path: 'navigation', redirectTo: 'navigation', pathMatch: 'full'},
  {path: 'navigation', component: NavigationComponent, children: [
    {path: 'inventory', component: InventoryComponent, outlet: 'navigation'},
    {path: 'input', component: InventoryInputComponent, outlet: 'navigation'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InventoryRoutingModule { }
