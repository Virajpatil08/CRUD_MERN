const express = require("express");
const app = express();
const userModel = require("./models/user");
const path = require("path");
app.set("view engine", "ejs");

// these below 3 for the ejs setup and broswer to understand html code
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// 1] Home Page show index.ejs
app.get("/", (req, res) => {
  res.render("index");
});

//2] for read the data
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

// 3] for creating the user

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });

  res.redirect("/read");
});

// 4] Delete the user -

app.post("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });

  res.redirect("/read");
});


// 5] Edit the user - 
app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({_id:req.params.userid});
    res.render("edit", { user });
  });


  // 6] update the user Details 
  app.post("/update/:userid", async (req, res) => {
    let { name, email, image } = req.body;
    let updateUser = await userModel.findOneAndUpdate({_id:req.params.userid},
    {
        
      name,
      email,
      image,
    } , {new:true});
    res.redirect("/read")
  });

app.listen(3000);
