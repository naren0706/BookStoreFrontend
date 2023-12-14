import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/User/login/login.component';
import { UserComponent } from './component/User/user/user.component';
import { RegisterComponent } from './component/User/register/register.component';
import { PasswordComponent } from './component/password/password/password.component';
import { ForgotComponent } from './component/password/forgot/forgot.component';
import { ResetComponent } from './component/password/reset/reset.component';
import { DashboardComponent } from './component/books/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/books/get-all-books/get-all-books.component';
import { BookDetailsComponent } from './component/books/book-details/book-details.component';
import { CartComponent } from './component/Cart/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist/wishlist.component';
import { ProfileComponent } from './component/User/profile/profile.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { OldOrdersComponent } from './component/orders/old-orders/old-orders.component';
import { AuthenticationService } from './services/AuthendicationService/authentication.service';
import { SignoutComponent } from './component/signout/signout.component';

const routes: Routes = [
  {
    path: '',
    component: SignoutComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'password',
    component: PasswordComponent,
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'reset/:token', component: ResetComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationService],
    children: [
      { path: 'books', component: GetAllBooksComponent },
      { path: 'bookDetails', component: BookDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'orderPlaced', component: OrderPlacedComponent },
      { path: 'oldOrders', component: OldOrdersComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
