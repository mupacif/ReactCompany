const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
const DbHelper = require('./Data/DbHelper');
const Users = require('./Data/model/Users');
const sequilize = require('./Data/database')
const cors = require('cors');
var keys = require('./keys');

var app = express();
app.use(cors()); //cross origins
app.use(bodyParser.json());

console.log(keys.host);


const PORT = 3000;

sequilize
.sync()
.then(result=>{
  app.listen(PORT, function() {
    console.log("info",'Server is running at port : ' + PORT);
  });
})



//add user - 
//mutation 
//upgrade 