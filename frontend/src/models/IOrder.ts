import {OrderStatus} from "../enums/orderStatus";

export interface IOrder {
  id: number;
  sender: string;
  receiver: string;
  status: OrderStatus;
}