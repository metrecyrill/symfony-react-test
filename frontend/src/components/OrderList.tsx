import React from 'react';
import {Table} from "react-bootstrap";
import OrderItem from "./OrderItem";
import {orderAPI} from "../services/orderService";
import Spinner from 'react-bootstrap/Spinner';
import {useAppSelector} from "../hooks/redux";

const OrderList: React.FC = () => {
  const {by, query} = useAppSelector(state => state.orderSearchReducer);
  const {data: orders, error, isLoading} = orderAPI.useGetOrdersQuery({by, query}, {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {isLoading &&
        <Spinner className="d-block" animation="grow" style={{width: "4rem", height: "4rem", margin: "1rem auto"}} />
      }
      {orders &&
        <Table striped className="mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {orders.map(order =>
            <OrderItem key={order.id} order={order}/>
          )}
          </tbody>
        </Table>
      }
    </>
  );
}

export default OrderList;