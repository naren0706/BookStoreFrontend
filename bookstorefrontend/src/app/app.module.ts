import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/User/register/register.component';
import { LoginComponent } from './component/User/login/login.component';
import { UserComponent } from './component/User/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PasswordComponent } from './component/password/password/password.component';
import { ForgotComponent } from './component/password/forgot/forgot.component';
import { ResetComponent } from './component/password/reset/reset.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PasswordComponent,
    ForgotComponent,
    ResetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
