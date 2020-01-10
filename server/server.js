const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');
const DbHelper = require('./Data/DbHelper');
const Users = require('./Data/model/Users');
const sequilize = require('./Data/database')
const cors = require('cors');

var app = express();
app.use(cors()); //cross origins
app.use(bodyParser.json());



app.use((req, res, next) => {  
  console.log("whyyy lol");
  var dbHelper = new DbHelper();
  var usersModel = new Users(dbHelper);
  req.userModel = usersModel;
  next();
});
console.log("whyy")

app.use('/graphql', graphqlHttp({
    schema : graphqlSchema,
    rootValue : graphqlResolver,
    graphiql : true
}));
 


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