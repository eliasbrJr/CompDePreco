import React from "react";
import logo from '../Assets/Photos/logo.png'
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className="text-primary font-arial-light mb-6">
                  Compara Preço
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Facilitando suas buscas.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
              <img className='sotre-pic'src={logo} alt='Foto da Loja' height='100px'/>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  Compara Preço
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;