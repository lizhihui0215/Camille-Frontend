import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import {AuthGuard} from '../core/auth-guard.service';
import {InventoryInputListComponent} from '../inventory/inventory-input-list/inventory-input-list.component';
import {InventorySearchListComponent} from '../inventory/inventory-search-list/inventory-search-list.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent, canActivate: [AuthGuard],
    children: [
      { path: 'inventory-input', component: InventoryInputListComponent, outlet: 'inventory' },
      { path: 'inventory-search', component: InventorySearchListComponent, outlet: 'inventory'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavRoutingModule { }
