import { Product } from "./product";

export type Order = {
  OrderID: string;
  Restaurant?: string;
  Products?: Product[];
  Status: string;
  Pickup?: boolean;
  OrderedAt?: Date;
  PreparedAt?: Date;
  DeliveredAt?: Date;
  CompletedAt?: Date;
}