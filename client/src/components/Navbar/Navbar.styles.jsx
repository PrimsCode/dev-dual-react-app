import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  font-size: 18px;
  height: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: 
  31F3C49;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  .selected {
    transform: traslateY(3rem);
    color: #e38b06;
  }
`;
