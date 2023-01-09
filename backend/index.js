//definition la route
const moment = require ("moment")
const express = require('express')
const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.get('/time', 
(req,res) => {  
const headers = {'Content-Type':'application/json',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET'}
let now = moment();
now.format("LLLL");
let formatfrancais =new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second:"numeric"
}).format(now);

const response = {
    statusCode: 200,
    headers:headers,
    data:JSON.stringify(formatfrancais),
};
res.json({response});
})
      app.listen(8080, () => {   
 console.log("Serveur à l'écoute")
})

