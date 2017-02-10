import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core/core.component';
import { SharedComponent } from './shared/shared.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { InventoryModule } from './inventory/inventory.module';
import {UserService} from './shared/user.service';
import { NavigationComponent } from './inventory/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent,
    SharedComponent,
    RegisterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InventoryModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
