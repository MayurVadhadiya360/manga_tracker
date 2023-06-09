const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();

const routes = require("./routes/main");

app.use('/static', express.static('public'));
app.use("",routes);

// template engine
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");


app.listen(process.env.PORT || 5556, ()=>{
    console.log("Server Started");
});


