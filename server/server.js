const express = require('express');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
var mysql = require('mysql');
const cors = require('cors');
const keys = require('./keys');

var app = express();
app.use(cors()); //cross origins
app.use(bodyParser.json());

const PORT = 1337;

//Mysql 
app.use((req, res, next) => {
    req.mysqlDb = mysql.createConnection({
      host     : keys.host,
      user     : keys.user,
      password : keys.password,
      database : keys.database
    });
    req.mysqlDb.connect();
    next();
  });




// Serve the Parse API on the /parse URL prefix
app.use('/graphql', graphqlHttp({
    schema : graphqlSchema,
    rootValue : graphqlResolver
}));

app.listen(PORT, function() {
});

