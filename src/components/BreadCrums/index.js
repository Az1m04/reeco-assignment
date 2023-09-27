import React from "react";
import styled from "styled-components";
import { TfiAngleRight} from "react-icons/tfi";

const BreadCrumsContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #cccccc;
  padding: 8px 8vw;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 -8px 16px;
`;

const BreadCrumsTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 10px;
  font-size: 10px;
  color: #707070;
`;

const BreadCrumsBottom = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const OrderNumber = styled.div`
  width: 50%;
  font-size: 1.4em;
  font-weight: bold;
  color:#4a4d56;
  `;

const OrderButtons = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  gap: 15px;
`;

 const BackButton = styled.button`
  font-weight: bold;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  padding: 0 20px;
  font-size: 0.9em;
  border-color: #336242;
  background-color: white;
  color: #336242;
  height: 35px;
`;

const PrimaryButton = styled.button`
  font-weight: bold;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  padding: 0 10px;
  font-size: 0.9em;
  color: #336242;
  height: 35px;
  border-color: #336242;
  background-color: #336242;
  color: white;
`;

const NavLink = styled.div`
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 500;
`;


const RightArrow = styled(TfiAngleRight)`
  position: relative;
`;


const BreadCrums = () => {
  return (
    <BreadCrumsContainer>
      <BreadCrumsTop>
        <NavLink style={{textDecoration:"none"}} to="/orders">Orders </NavLink> 
        <RightArrow size="12"/>
        <NavLink to="/order/1">Order 32457ABC</NavLink>
      </BreadCrumsTop>
      <BreadCrumsBottom>
        <OrderNumber>Order 32457ABC</OrderNumber>
        <OrderButtons>
          <BackButton>Back</BackButton>
          <PrimaryButton>Approve Order</PrimaryButton>
        </OrderButtons>
      </BreadCrumsBottom>
    </BreadCrumsContainer>
  );
};

export default BreadCrums;
