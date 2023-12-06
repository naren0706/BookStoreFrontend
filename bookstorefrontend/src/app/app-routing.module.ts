import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/User/login/login.component';
import { UserComponent } from './component/User/user/user.component';
import { RegisterComponent } from './component/User/register/register.component';
import { PasswordComponent } from './component/password/password/password.component';
import { ForgotComponent } from './component/password/forgot/forgot.component';
import { ResetComponent } from './component/password/reset/reset.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      // { path: 'archive', component: ArchiveComponent },
    ],
  },
  {
    path: 'password',
    component: PasswordComponent,
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'reset/:token', component: ResetComponent },
      // { path: 'archive', component: ArchiveComponent },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
