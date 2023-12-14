import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/User/register/register.component';
import { LoginComponent } from './component/User/login/login.component';
import { UserComponent } from './component/User/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordComponent } from './component/password/password/password.component';
import { ForgotComponent } from './component/password/forgot/forgot.component';
import { ResetComponent } from './component/password/reset/reset.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/books/dashboard/dashboard.component';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { GetAllBooksComponent } from './component/books/get-all-books/get-all-books.component';
import { BookComponent } from './component/books/book/book.component';
import { SearchbarPipe } from './pipes/search/searchbar.pipe';
import { BookDetailsComponent } from './component/books/book-details/book-details.component';
import { FeedbackComponent } from './component/books/feedback/feedback.component';
import { CartComponent } from './component/Cart/cart/cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartBooksComponent } from './component/Cart/cart-books/cart-books.component';
import { NewAddressComponent } from './component/Cart/new-address/new-address.component';
import { TestComponent } from './component/test/test.component';
import { CustomerAddressComponent } from './component/Cart/customer-address/customer-address.component';
import { SummaryBookComponent } from './component/Cart/summary-book/summary-book.component';
import { WishlistComponent } from './component/wishlist/wishlist/wishlist.component';
import { WishlistBookComponent } from './component/wishlist/wishlist-book/wishlist-book.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './component/User/profile/profile.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { OldOrdersComponent } from './component/orders/old-orders/old-orders.component';
import { OldOrderBooksComponent } from './component/orders/old-order-books/old-order-books.component';
import { UserAddressesComponent } from './component/User/user-addresses/user-addresses.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignoutComponent } from './component/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PasswordComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    GetAllBooksComponent,
    BookComponent,
    SearchbarPipe,
    BookDetailsComponent,
    FeedbackComponent,
    CartComponent,
    CartBooksComponent,
    NewAddressComponent,
    TestComponent,
    CustomerAddressComponent,
    SummaryBookComponent,
    WishlistComponent,
    WishlistBookComponent,
    ProfileComponent,
    OrderPlacedComponent,
    OldOrdersComponent,
    OldOrderBooksComponent,
    UserAddressesComponent,
    SignoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
