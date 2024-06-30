// src/app/app.module.ts
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [    
    OrdersComponent,
    OrderDetailsComponent,
    DeliveryComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}