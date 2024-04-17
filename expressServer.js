const express = require('express');
const app = new express();

let loginDetails = [];

let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetchMonth/:num", (req, res) => {

    let num = parseInt(req.params.num);

    if (num > monthNames.length || num < 1){
        res.send("Error: No es un mes valido");
    } else {
        res.send(monthNames[num-1]);
    }


    /*for(let i = 0; i < monthNames.length; i++){
        if(i == num-1){
            res.send(monthNames[i]);
        }
    }*/
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

