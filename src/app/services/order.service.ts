// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://localhost:7187/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }
}