import React from "react";
import reactRouterDom from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
  NavDropdown,
  Form,
} from "react-bootstrap";
import history from "../history";

const Navbarr = ({ label, onSearch, onFilter }) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"> </Nav.Link>
              <Nav.Link href="#"> </Nav.Link>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  style={{ margin: "0 7em" }}
                  onChange={onSearch}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />

                <Button variant="outline-success">Search</Button>
              </Form>
              <NavDropdown
                style={{
                  display: "block",
                  padding: "5px",
                  backgroundColor: "black",
                  // marginRight: "5em",
                }}
                onSelect={onFilter}
                title={
                  <span
                    style={{
                      color: "white",
                      borderColor: "white",
                      borderRadius: "10px",
                      // padding: "0 60px",
                      borderColor: "none",
                    }}
                  >
                    Department
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={onFilter}>UI-UX</NavDropdown.Item>
                <NavDropdown.Item onClick={onFilter}>Frontend</NavDropdown.Item>
                <NavDropdown.Item onClick={onFilter}>Backend</NavDropdown.Item>
              </NavDropdown>
              <Button
                variant="primary"
                onClick={() => history.push("/addMember")}
              >
                Add a new Member
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
