// src/app/models/order.model.ts
export interface Order {
    id: string;
    customerName: string;
    orderDate: Date;
    status: string;
    // outros campos que você precise
  }