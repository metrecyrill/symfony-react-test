import React, {FC} from 'react';
import {IOrder} from "../models/IOrder";
import {OrderStatus} from "../enums/orderStatus";

interface OrderItemProps {
  order: IOrder
}

const OrderItem: FC<OrderItemProps> = ({order}) => {
  return (
      <tr>
        <td>{order.id}</td>
        <td>{order.sender}</td>
        <td>{order.receiver}</td>
        <td>{OrderStatus[order.status]}</td>
      </tr>
  );
}

export default OrderItem;