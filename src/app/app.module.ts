import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {SignInModule} from "./sign-in/sign-in.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {InventoryModule} from "./inventory/inventory.module";
import {NotEmptyWaringDirective} from "./core/not-empty-waring.directive";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    SignInModule,
    SharedModule,
    InventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
