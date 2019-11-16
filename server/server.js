const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
//var mysql = require('mysql');
const cors = require('cors');
const keys = require('./keys');

var app = express();
app.use(cors()); //cross origins
app.use(bodyParser.json());

const PORT = 3000;

//Mysql 
// app.use((req, res, next) => {
//     req.mysqlDb = mysql.createConnection({
//       host     : keys.host,
//       user     : keys.user,
//       password : keys.password,
//       database : keys.database
//     });
//     req.mysqlDb.connect();
//     next();
//   });





app.use('/graphql', graphqlHttp({
    schema : graphqlSchema,
    rootValue : graphqlResolver,
    graphiql : true
}));

app.listen(PORT, function() {
  console.log("info",'Server is running at port : ' + PORT);
});

