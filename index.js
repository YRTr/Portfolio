const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 5500;


const publicDirectoryPath = path.join(__dirname, "./dist");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render('welcome')
})

app.get("/about", (req,res)=> {
    res.render('about');
})

app.listen(port, () => {
    console.log("Server started running at port " + port);
})