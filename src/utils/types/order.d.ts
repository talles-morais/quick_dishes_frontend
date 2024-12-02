import { Product } from "./product";

export type Order = {
  client: Client;
  order_id: string;
  restaurant?: string;
  products?: Product[];
  status: string;
  pickup?: boolean;
  ordered_at?: Date;
  prepared_at?: Date;
  delivered_at?: Date;
  completed_at?: Date;
}