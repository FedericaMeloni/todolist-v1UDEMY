//
//RICHIEDIAMO I PACKAGE
const express = require("express");
const bodyParser = require("body-Parser");
const date = require(__dirname + "/date.js");

const app = express();

const itemList = ["food", "altro"];
const workItem = ["lavorare"];

//set up body Parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); //quello che è nella folder public è statico

app.set("view engine", "ejs");



//-----  HOME ROUTE ------------//
app.get("/", function(req, res) { // / home route
  const day=date.getDate(); //const date = require(__dirname + "/date.js");

  res.render("list", {   Title: day,    newListItem: itemList  });


  /*  var today = new Date(); //check the documentatio
    var numDay=today.getDay();

    switch(numDay){
      case:0
      numDay="Sunday";
      break;
      case:1
      numDay="Monday";
      break;
      case:2
      numDay="Tuesday";
      break;
      case:3
      numDay="Wednesday";
      break;
      case:4
      numDay="Thursday";
      break;
      case:5
      numDay="Friday";
      break;
      case: 6
      numDay="Saturday";
      break;
    }
    if (today.getDay() === 6 || today.getDay() === 0) {
      res.render("list", {Titel: day});//usa l'engine to render a PAge
    } else {
      res.render("list", {Titel: day});
    }*/
});

app.post("/", function(req, res) {
  console.log(req.body.list);
  if (req.body.list === "Work") {
    workItem.push(item);
    res.redirect("/work");
  } else {
    itemList.push(item);
    res.redirect("/");
  }

  var item = req.body.newItem;
  itemList.push(item);

  res.redirect("/"); // triggher app.get

});


//----------- WORK ---------------------//
app.get("/work", function(req, res) {
  res.render("list", {
    Title: "Work List",
    newListItem: workItem
  })
});

app.post("/work", function(req, res) {

  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
  console.log(req.body);
});


//--------- ABOUT -----------------//
app.get("/about", function(req, res){
  res.redirect("/about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
