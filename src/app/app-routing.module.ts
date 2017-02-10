import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =
  [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'register', redirectTo: 'register', pathMatch: 'full'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
