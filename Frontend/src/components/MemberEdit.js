import React from "react";
import { ButtonToolbar, ButtonGroup, Button, Table } from "react-bootstrap";
import "../styles/Form.css";

const MemberEdit = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        className="box"
        style={{
          backgroundColor: "rgb(51, 52, 57)",
          cellpadding: "10",
          width: "70%",
        }}
      >
        <tr>
          <td> Name</td>
          <td>
            <input
              type="text"
              name="name"
              maxlength="50"
              placeholder="
        Name here"
            />
            (Max 50 Characters Allowed)
          </td>
        </tr>
        <tr>
          <td>Date of Birth(DOB)</td>
          <td>
            <input
              type="text"
              name="DateOfBirth"
              maxlength="10"
              placeholder="DD/MM/YYYY"
            />
            (Max 10 Characters Allowed)
          </td>
        </tr>
        <tr>
          <td>Date of Joining (DOJ)</td>
          <td>
            <input
              type="text"
              name="DateOfJoining"
              maxlength="10"
              placeholder="DD/MM/YYYY"
            />
            (Max 10 Characters Allowed)
          </td>
        </tr>
        <tr>
          <td>Email ID</td>
          <td>
            <input type="email" name="email" placeholder="abc@gmail.com" />
          </td>
        </tr>
        <tr>
          <td>Mobile Number</td>
          <td>
            <input
              type="number"
              name="phone"
              maxlength="10"
              placeholder="7842xxxxxx"
            />
            ( 10 Digits Allowed)
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <input type="radio" name="gender" />
            Male
            <input type="radio" name="gender" />
            Female
            <input type="radio" name="gender" />
            Other
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <textarea name="address" rows="5" cols="50"></textarea>
          </td>
        </tr>
        <tr>
          <td>Employee Image</td>
          <td>
            <input type="text" name="image" placeholder="Image URL" />
          </td>
        </tr>
        <tr>
          <td>Department</td>
          <td>
            <input type="text" name="department" placeholder="Department" />
          </td>
        </tr>
        <tfoot>
          <td align="center" colspan="2">
            <input type="Submit" name="submit" />
            <input type="reset" name="reset" />
          </td>
        </tfoot>
      </Table>
    </div>
  );
};

export default MemberEdit;
