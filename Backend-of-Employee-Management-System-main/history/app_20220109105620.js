const express = require("express");
const app = express();
const path = require("path");
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/employees", async (req, res) => {
  const data = [
    {
      name: "Kim Farrell",
      DateOfBirth: "03/12/1984",
      DateOfJoining: "21/01/2000",
      department: "UI-UX",
      phone: "1-627-811-8285",
      email: "lectus@yahoo.org",
      address: "490-9807 Urna, Ave",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlua2VkaW4lMjBwcm9maWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Serina Dodson",
      DateOfBirth: "12/08/1985",
      DateOfJoining: "12/02/2000",
      department: "UI-UX",
      phone: "1-728-239-7674",
      email: "massa@hotmail.org",
      address: "P.O. Box 410, 4527 Ac Av.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGxpbmtlZGluJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ferris Hester",
      DateOfBirth: "07/04/1986",
      DateOfJoining: "10/11/2000",
      department: "UI-UX",
      phone: "(883) 215-6357",
      email: "lacinia@yahoo.com",
      address: "993-1975 Dapibus St.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxpbmtlZGluJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Audra Ward",
      DateOfBirth: "31/10/1986",
      DateOfJoining: "19/02/2003",
      department: "UI-UX",
      phone: "(451) 283-7256",
      email: "nulla@outlook.org",
      address: "676-7191 Sem St.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Baker Goodman",
      DateOfBirth: "30/09/1987",
      DateOfJoining: "19/05/2008",
      department: "FrontEnd",
      phone: "1-584-991-3028",
      email: "tincidunt.dui@protonmail.couk",
      address: "565-3814 Semper, Road",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1508243529287-e21914733111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Cara Olson",
      DateOfBirth: "21/10/1989",
      DateOfJoining: "06/02/2009",
      department: "FrontEnd",
      phone: "(637) 236-4825",
      email: "et.rutrum@outlook.edu",
      address: "Ap #904-9404 Interdum Rd.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Adam Clements",
      DateOfBirth: "10/05/1990",
      DateOfJoining: "07/10/2015",
      department: "FrontEnd",
      phone: "1-357-258-2575",
      email: "lacus.quisque@hotmail.org",
      address: "431-2700 Cursus Rd.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Addison Rojas",
      DateOfBirth: "30/11/1991",
      DateOfJoining: "06/02/2012",
      department: "FrontEnd",
      phone: "1-873-727-8132",
      email: "ornare.lectus.ante@hotmail.couk",
      address: "Ap #635-256 Magna Ave",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Arden Lott",
      DateOfBirth: "06/03/1986",
      DateOfJoining: "07/10/2009",
      department: "BackEnd",
      phone: "(964) 812-2889",
      email: "nunc.sed.orci@icloud.org",
      address: "Ap #403-1578 Placerat. Ave",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1618568949779-895d81686151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      name: "Quemby Smith",
      DateOfBirth: "11/01/1989",
      DateOfJoining: "04/12/2010",
      department: "BackEnd",
      phone: "(242) 442-9867",
      email: "varius.nam@yahoo.couk",
      address: "Ap #680-700 Arcu. Rd.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      name: "Shaine Fischer",
      DateOfBirth: "29/07/1994",
      DateOfJoining: "12/02/2013",
      department: "BackEnd",
      phone: "1-185-439-7625",
      email: "etiam.bibendum.fermentum@hotmail.couk",
      address: "933-242 Dictum Ave",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Veda Garcia",
      DateOfBirth: "07/10/1991",
      DateOfJoining: "28/12/2016",
      department: "BackEnd",
      phone: "1-573-538-1351",
      email: "etiam@protonmail.ca",
      address: "312-5881 Feugiat St.",
      gender: "male",
      image:
        "https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  res.send(data);
});

app.get("/employees1", async (req, res) => {
  const Employees = await Employee.find({});
  res.send(Employees);
});

app.get("/home", async (req, res) => {
  const Employees = await Employee.find({});
  res.render("employee", { Employees });
}); //For my usage---------------------------------------------------------------------------------------------------------

app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/edit/:name", async (req, res) => {
  const { name } = req.params;
  const e = await Employee.findOne({ name: name });
  res.render("edit", { e });
});

app.post("/home", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const createUser = await newEmployee.save();
    res.status(201).send(createUser);
    res.redirect("/home");
  } catch (err) {
    res.status(404).send(err);
  }
}); //######################################################################################################################

app.get("/:name", async (req, res) => {
  const { name } = req.params;
  const e = await Employee.findOne({ name });
  res.send(e); //--------------------------------------------------------------------------------------------
});

app.put("/:name", async (req, res) => {
  const { name } = req.params;
  const e = await Employee.findOneAndUpdate({ name: name }, req.body, {
    runValidators: true,
    new: true,
  });
  console.log(e);
  res.redirect(`/${e.name}`);
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
