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
import "../../styles/CustomAppBarr.css";

const CustomAppBar = ({ label, onSearch }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
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
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav> */}
          <NavDropdown
            style={{
              display: "block",
              padding: "5px",
              backgroundColor: "black",
              marginRight: "5em",
            }}
            title={
              <span
                style={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "10px",
                  padding: "0 60px",
                  borderColor: "none",
                }}
              >
                Department
              </span>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">UI-UX</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Frontend</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Backend</NavDropdown.Item>
          </NavDropdown>
          <Button style={{ margin: "0 7em" }} variant="primary">
            Add a new Member
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomAppBar;
