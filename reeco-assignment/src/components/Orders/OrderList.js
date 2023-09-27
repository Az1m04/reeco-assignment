import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { TbPrinter } from "react-icons/tb";
import { BsCheckLg, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, updateStatus } from "../../ReduxStore/Slices/OrderSlice";
import ConfirmPopup from "../Modals/ConfirmPopup";

const OrderListContainer = styled.div`
  margin-top: 20px;
  width: 98%;
`;

const OrderListWrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 20px 20px;
`;

const OrderListFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
`;

export const SearchWrapper = styled.div`
  width: 40%;
  height: inherit;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  height: 35px;
  padding: 2px 10px;
  font-size: 0.9em;
`;

export const FilterButtonWrapper = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const AddItem = styled.div``;

export const PrintButton = styled.div`
  margin-left: 20px;
`;

export const PrintIcon = styled(TbPrinter)`
  width: 50px;
  color: #336242;
  position: relative;
  top: 4px;
`;

const OrderListTableContainer = styled.div`
  width: 100%;
`;

const SpanText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 7px 10px;
  align-items: center;
  font-weight: 400;
  color: #727272;
  font-size: 0.9em;
  border-left: none;
  border-right: none;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-radius: ${(props) =>
    props.corner === "left"
      ? "20px 0 0 0"
      : props.corner === "right"
      ? "0 20px 0 0"
      : "0"};
  border-left: ${(props) =>
    props.corner === "left" ? "1px solid #ebebeb" : "none"};
  border-right: ${(props) =>
    props.corner === "right" ? "1px solid #ebebeb" : "none"};
`;

const AddButton = styled.button`
  font-weight: bold;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  padding: 0 10px;
  font-size: 0.9em;
  border-color: #336242;
  background-color: white;
  color: #336242;
  height: 35px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: 1px;
`;

const TableHeader = styled.th``;

const TableRow = styled.tr``;

const TableCell = styled.td``;

const OrdImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
`;

const ColumnText = styled(SpanText)`
  color: black;
  padding: 0px 10px;
  padding: ${(props) => (props.side === "left" ? "15px" : "none")};
  padding-right: ${(props) => (props.side === "right" ? "15px" : "none")};
  border-radius: ${(props) =>
    props.corner === "left"
      ? "0 0 0 20px"
      : props.corner === "right"
      ? "0 0 20px 0"
      : "0"};
  border-left: ${(props) =>
    props.side === "left" ? "1px solid #ebebeb" : "none"};
  border-right: ${(props) =>
    props.side === "right" ? "1px solid #ebebeb" : "none"};
  border-top: none;
`;

const StatusWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Status = styled.div``;

export const StatusText = styled.div`
  color: white;
  border-radius: 20px;
  text-transform: capitalize;
  padding: 3px 10px;
  background-color: ${(props) => {
    switch (props.type) {
      case "approved":
        return "#3dc972";
      case "missing":
        return "#f08716";
      case "missing-urgent":
        return "#D10000";
      default:
        return "white";
    }
  }};
  text-align: center;
  width: max-content;
`;

const Approve = styled.div`
  cursor: pointer;
`;

const ApproveIcon = styled(BsCheckLg)`
  color: black;
  &:hover {
    color: green;
  }
`;

export const Reject = styled.div`
  cursor: pointer;
`;

export const RejectIcon = styled(BsX)`
  color: black;
  &:hover {
    color: green;
  }
`;

export const ButtonEditWrapper = styled.div``;

export const ButtonEdit = styled.div`
color: #727272;
`;

const OrderList = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state?.orders?.orderList);
  const [show, setShow] = useState({
    value: false,
    data: null,
  });

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <OrderListContainer>
      <OrderListWrapper>
        <OrderListFilterContainer>
          <SearchWrapper>
            <SearchInput disabled placeholder="Search..." />
          </SearchWrapper>
          <FilterButtonWrapper>
            <AddButton>Add item</AddButton>
            <PrintIcon size={24} />
          </FilterButtonWrapper>
        </OrderListFilterContainer>
        <OrderListTableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>
                  <SpanText corner="left">&nbsp;</SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText>Product name</SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText>Brand </SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText>Price</SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText>Quantity</SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText>Total</SpanText>
                </TableHeader>
                <TableHeader>
                  <SpanText corner="right">Status</SpanText>
                </TableHeader>
              </tr>
            </thead>
            <tbody>
              {orderList?.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <ColumnText side="left">
                      <OrdImage src={`/assets/${order.image}`} />
                    </ColumnText>
                  </TableCell>
                  <TableCell style={{ width: "20%" }}>
                    <ColumnText>{order.name}</ColumnText>
                  </TableCell>
                  <TableCell>
                    <ColumnText>{order.brand}</ColumnText>
                  </TableCell>
                  <TableCell>
                    <ColumnText>{`$${order.price}`}</ColumnText>
                  </TableCell>
                  <TableCell>
                    <ColumnText>{order.quantity}</ColumnText>
                  </TableCell>
                  <TableCell>
                    <ColumnText>{`$${order.total}`}</ColumnText>
                  </TableCell>
                  <TableCell>
                    <ColumnText
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(216 244 227 / 28%)",
                      }}
                      side="right"
                    >
                      <Status
                        style={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <StatusText type={order.status}>
                          {order.status}
                        </StatusText>
                      </Status>
                      <StatusWrapper
                        style={{
                          width: "50%",
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                        }}
                      >
                        <Approve
                          onClick={() =>
                            dispatch(
                              updateStatus({
                                type: "orders/updateStatus",
                                order: { ...order, status: "approved" },
                                itemID: order.id,
                              })
                            )
                          }
                        >
                          <ApproveIcon
                            color={
                              order.status === "approved"
                                ? "#3dc972"
                                : "#aaaaaa"
                            }
                            size={24}
                          />
                        </Approve>
                        <Reject
                          onClick={() => {
                            setShow({
                              value: true,
                              data: order,
                            });
                          }}
                        >
                          <RejectIcon
                            color={
                              order.status === "missing-urgent"
                                ? "#D10000"
                                : order.status === "missing"
                                ? "#f08716"
                                : "#aaaaaa"
                            }
                            size={30}
                          />
                        </Reject>
                        <ButtonEditWrapper>
                          <ButtonEdit>Edit</ButtonEdit>
                        </ButtonEditWrapper>
                      </StatusWrapper>
                    </ColumnText>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </OrderListTableContainer>
      </OrderListWrapper>
      {show.value && <ConfirmPopup show={show} setShow={setShow} />}
    </OrderListContainer>
  );
};

export default OrderList;
