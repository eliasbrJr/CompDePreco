import React, { useState } from 'react';
import './header.css'
import logo from '../Assets/Photos/Logotipo ComparaPreco.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  InputGroupAddon,
  Button
} from 'reactstrap';

const Topo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="topo">
      <Navbar light expand="md">
        <img className='sotre-pic'src={logo} alt='Foto da Loja' height='60px'/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
          <InputGroup>
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
                Loja
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Loja</DropdownItem>
                <DropdownItem>Produto</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>

            <Input placeholder="Pesquisar" />
            <InputGroupAddon addonType="prepend"><Button>Pesquisar</Button></InputGroupAddon>
          </InputGroup>
          <NavbarText className="col col-md-2">Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topo;