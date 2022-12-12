const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const PORT = process.env.PORT || 8000;

const public = path.join(__dirname,"../public");
const partials_dir = path.join(__dirname,"../templates/partials");
const view_dir = path.join(__dirname,"../templates/views");
// console.log(view_dir);

app.set('view engine', 'hbs');
app.use(express.static(public));
app.set("views", view_dir);
hbs.registerPartials(partials_dir);


app.get('/', (req,res) =>{
    res.render("index");
})
app.get('/weather', (req,res) =>{
    res.render("weather");
})
// app.get('/about', (req,res) =>{
//     res.render("about");
// })
app.get("*",(req,res)=>{
    res.render("404")
})



app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log(`Server Start Sucessfully port no is ${port}`)
})