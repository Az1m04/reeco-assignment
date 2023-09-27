import React from "react";
import styled from "styled-components";

const OrderDetailsContainer = styled.div`
  width: 98%;
`;

const OrderDetailsWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: table;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 20px 20px;
`;

const SectionContainer = styled.div`
  height: 100%;
  padding: 0 20px;
  display: table-cell;
  /* border-right: ${(props) =>
    props.needDivider ? "1px solid #cccccc" : "none"}; */
`;

const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  color: #727272;
`;

const SectionValue = styled.div`
  font-weight: bold;
  flex-grow: 1;
  color: #4a4d56;
`;

const OrderDetail = () => {
  const orderInfo = [
    { id: "supplier", value: "East coast fruits & vegetables" },
    { id: "shippingDate", value: "Thu,Feb 10" },
    { id: "total", value: "$15028.3" },
    { id: "categoryIDs", value: "Lorem text" },
    { id: "department", value: "300-444-678" },
    { id: "status", value: "Awaiting for your approval" },
  ];
  return (
    <OrderDetailsContainer>
      <OrderDetailsWrapper>
        {orderInfo.length > 0 &&
          orderInfo?.map((items, idx) => {
            return (
              <SectionContainer
                key={items?.id}
                style={{
                  width: "10%",
                  borderRight:
                    idx < orderInfo.length - 1 ? "1px solid #cccccc" : "none",
                }}
              >
                <SectionTitle>{items?.id}</SectionTitle>
                <SectionValue>{items?.value}</SectionValue>
              </SectionContainer>
            );
          })}
      </OrderDetailsWrapper>
    </OrderDetailsContainer>
  );
};

export default OrderDetail;
