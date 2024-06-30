// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

export const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'deliveries', component: DeliveryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }