import React from "react";
import styled from "styled-components";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";

const OrdersContainer = styled.div`
  padding: 20px 8vw;
`;

export const Orders = () => {
  return (
    <OrdersContainer>
      <OrderDetails />
      <OrderList />
    </OrdersContainer>
  );
};

export default Orders;
