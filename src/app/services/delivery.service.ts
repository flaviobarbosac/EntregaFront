// src/app/services/delivery.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = 'https://localhost:7187/api/deliveries';

  constructor(private http: HttpClient) {}

  getDeliveries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}