// src/app/services/notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://localhost:7187/api/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}