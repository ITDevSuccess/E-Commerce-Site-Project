import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from "./pages/users/users.component";
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  }
  ,
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}
