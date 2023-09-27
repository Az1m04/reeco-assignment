import React from "react";
import styled from "styled-components";
import { TfiShoppingCart, TfiAngleDown } from "react-icons/tfi";

const HeaderContainer = styled.div`
  display: flex;
  padding: 8px 8vw;
  justify-content: space-between;
  align-items: center;
  background-color: #1e633f;
  position: relative;
  z-index: 10;
`;

const LogoText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: -3px;
`;

const NavLink = styled.a`
  text-align: center;
  color: white;
  text-decoration: none;
`;

const NavBar = styled.nav`
  width: 60vw;
  display: flex;
  justify-content: flex-start;
  gap: 3.5rem;
`;

const CartContainer = styled.div`
  text-align: center;
  position: relative;
`;

const CartIcon = styled(TfiShoppingCart)`
  color: white;
  position: relative;
`;

const CartCount = styled.div`
  position: absolute;
  top: -5px;
  left: -8px;
  width: 15px;
  height: 15px;
  background-color: #3ea83e;
  color: white;
  font-size: 0.7em;
  line-height: 15px;
  border-radius: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DownIcon = styled(TfiAngleDown)`
  color: white;
`;

const ProfileTitle = styled.p`
  color: white;
  margin:0px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink href="/">
        <LogoText>Reeco</LogoText>
      </NavLink>

      <NavBar>
        <NavLink href="#">Store</NavLink>
        <NavLink href="#">Orders</NavLink>
        <NavLink href="#">Analytics</NavLink>
      </NavBar>
      <CartContainer>
        <CartIcon size={22} />
        <CartCount>5</CartCount>
      </CartContainer>
      <ProfileContainer>
        <ProfileTitle>Hello, James </ProfileTitle>
        <DownIcon />
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
