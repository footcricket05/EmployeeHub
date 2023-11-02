import { Card, Col, Button } from "react-bootstrap";
import history from "../history";

const CustomTile = ({ name, department, image }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px 20px 10px 5px",
        height: "22rem",
        backgroundColor: "rgb(51, 52, 57)",
      }}
      // onClick={() => history.push("/profile")}
    >
      <Card.Img
        variant="top"
        style={{
          //   : "center",
          borderRadius: "80%",
          height: "50%",
          width: "70%",
          margin: "10px",
        }}
        src={image}
        onClick={() => history.push("/profile")}
      />

      <Card.Body
        style={{ textAlign: "center", backgroundColor: "rgb(51, 52, 57)" }}
      >
        <Card.Title
          onClick={() => history.push("/profile")}
          style={{ backgroundColor: "rgb(51, 52, 57)" }}
        >
          {name}
        </Card.Title>
        <Card.Text
          onClick={() => history.push("/profile")}
          style={{
            backgroundColor:
              department === "UI-UX"
                ? "red"
                : department === "FrontEnd"
                ? "blue"
                : "green",
            padding: "0 10px",
          }}
        >
          {" "}
          {department}
        </Card.Text>
        const randomm = req.params.name;
        <Button
          style={{
            backgroundColor: "#282626",
            borderRadius: "10px",
            padding: "0 60px",
            borderColor: "none",
          }}
          onClick={() => history.push("/editMember/:name")}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomTile;
