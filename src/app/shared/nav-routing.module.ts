import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import {InventoryComponent} from "../main/inventory/inventory.component";
import {AuthGuard} from "../core/auth-guard.service";

const routes: Routes = [
  { path: 'nav', component: NavComponent, canActivate: [AuthGuard],
    children: [
    { path: 'inventory', component: InventoryComponent, outlet:'main' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavRoutingModule { }
