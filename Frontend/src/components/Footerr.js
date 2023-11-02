import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../styles/Footerr.css";
import { Container } from "react-bootstrap";

function Footerr() {
  return (
    <div id="footerr_main">
      <MDBFooter color="black" className="font-small pt-0 mt-4" id="footerr-bg">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="8">
              <h4 style={{ paddingTop: "80px" }} className="title">
                LOGO
              </h4>
            </MDBCol>
            <MDBCol style={{ paddingTop: "50px" }} md="3">
              <ul className="footerr_ul" style={{ textAlign: "left" }}>
                <li className="list-unstyled">
                  <a href="#">Solutions</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">Pricing</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">Newsletter</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">Contact</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Privacy-Policy</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a
              href="https://techanalogy.org/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Techanalogy{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footerr;
