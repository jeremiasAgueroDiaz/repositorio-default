const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("vista", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/libreria", (req, res) => {
    res.render("index");
    //res.render("pruebas", { p : p});
});

app.listen(port, () => {
    console.log("el puerto anda mortal ");
});
