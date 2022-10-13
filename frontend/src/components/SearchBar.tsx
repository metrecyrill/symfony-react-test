import React from 'react';
import {Form} from "react-bootstrap";
import {orderSearchSlice} from "../store/reducers/orderSearchSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {OrderStatus} from "../enums/orderStatus";

const SearchBar = () => {
  const {by} = useAppSelector(state => state.orderSearchReducer);
  const {changeBy, changeQuery} = orderSearchSlice.actions;
  const dispatch = useAppDispatch();

  const onChangeBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeBy(event.target.value));
  }

  let delayTimer: string | number | NodeJS.Timeout | undefined;

  const onChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    let query = event.target.value;

    if (by === 'status') {
      const indexOfS = Object.keys(OrderStatus).findIndex(status => status.startsWith(query.toUpperCase()));
      query = Object.values(OrderStatus)[indexOfS]?.toString();
    }

    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => dispatch(changeQuery(query)), 1000);
  }

  return (
    <>
      <Form.Select onChange={onChangeBy} size="sm" aria-label="Select search by" className="ms-auto" style={{width: "10%"}}>
        <option hidden >Search by</option>
        <option value="id">ID</option>
        <option value="sender">Sender</option>
        <option value="receiver">Receiver</option>
        <option value="status">Status</option>
      </Form.Select>
      <Form.Control onChange={onChangeQuery} size="sm" type="text" placeholder="Search" className="w-50 ms-1"/>
    </>
  );
}

export default SearchBar;