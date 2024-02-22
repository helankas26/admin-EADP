import {Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard/dashboard.component";
import {
  HomeDefaultComponent
} from "./components/dashboard/dashboard/inner-items/home/home-default/home-default.component";
import {
  CartDefaultComponent
} from "./components/dashboard/dashboard/inner-items/cart/cart-default/cart-default.component";
import {
  CustomerDefaultComponent
} from "./components/dashboard/dashboard/inner-items/customer/customer-default/customer-default.component";
import {
  CategoryDefaultComponent
} from "./components/dashboard/dashboard/inner-items/category/category-default/category-default.component";
import {
  DiscountDefaultComponent
} from "./components/dashboard/dashboard/inner-items/discount/discount-default/discount-default.component";
import {
  ProductDefaultComponent
} from "./components/dashboard/dashboard/inner-items/product/product-default/product-default.component";
import {
  ReviewDefaultComponent
} from "./components/dashboard/dashboard/inner-items/review/review-default/review-default.component";
import {LoginPageComponent} from "./components/security/login-page/login-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
      {path: 'home', component: HomeDefaultComponent},
      {path: 'cart', component: CartDefaultComponent},
      {path: 'customer', component: CustomerDefaultComponent},
      {path: 'category', component: CategoryDefaultComponent},
      {path: 'discount', component: DiscountDefaultComponent},
      {path: 'product', component: ProductDefaultComponent},
      {path: 'review', component: ReviewDefaultComponent},
    ]
  }
];
