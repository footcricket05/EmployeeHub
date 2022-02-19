const express = require("express");
const app = express();
//const path = require("path");
const mongoose = require("mongoose");
const Employee = require("./models/employee");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");

mongoose
  .connect(
    "mongodb+srv://ABHILASH_A:Mongo123456@cluster0.askpc.mongodb.net/WebPro_MajorProject1?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO MONGO ERROR");
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());
app.use(helmet());


app.get("/employees1", async (req, res) => {
  const Employees = await Employee.find({});
  res.send(Employees);
});


app.get("/:name", async (req, res) => {
  const { name } = req.params;
  const e = await Employee.findOne({ name });
  res.send(e); //--------------------------------------------------------------------------------------------
});

app.get("/home/:department", async (req, res) => {
  const { department } = req.params;
  const e = await Employee.find({ department });
  res.send(e); //--------------------------------------------------------------------------------------------
});

app.post("/home", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const createUser = await newEmployee.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.patch("/:name", async (req, res) => {
  const { name } = req.params;
  const e = await Employee.findOneAndUpdate({ name: name }, req.body, {
    runValidators: true,
    new: true,
  });
  //console.log(e);
  //res.redirect(`/${e.name}`);
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Seems you got lost",
  });
});

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started");
  }
});
