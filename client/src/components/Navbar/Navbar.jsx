import {
  Nav,
  NavbarContainer,
  Menu,
  MenuItem,
} from "./Navbar.styles";

import { Button} from '@mui/material';

const Navbar = () => {
  return (
    <Nav>
    <NavbarContainer>
      <Menu>
        <MenuItem>
            <Button href="/" style={{fontSize: "35px", color:"purple"}}>{"<--Dev-Duel-->"}</Button>
        </MenuItem>
        <MenuItem>
            <Button href="/inspect" style={{fontSize: "35px", color:"orange"}}>Inspect</Button>
        </MenuItem>
        <MenuItem>
            <Button href="/duel" style={{fontSize: "35px", color:"red"}}>Duel</Button>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  </Nav>
  );
};

export default Navbar;
