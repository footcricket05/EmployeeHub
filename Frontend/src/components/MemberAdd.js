import React from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
const Member = () => {
  return (
    <div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button className="me-2" href="javascript:history.back()">Back</Button>
          
        </ButtonGroup>
      </ButtonToolbar>
      <h1 className="Heading">Add Staff</h1>
    </div>
  );
};

export default Member;
