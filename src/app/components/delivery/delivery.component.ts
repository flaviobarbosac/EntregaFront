// src/app/components/delivery/delivery.component.ts
import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveries: any[] = [];

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.deliveryService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }
}