var {  buildSchema } = require('graphql');
module.exports  = buildSchema(  `
  input User {
    firstName : String
    lastName : String
    email : String
    username : String
    password : String
  }
  type Users {
    id : Int
    firstName : String
    lastName : String
    email : String
    username : String
    password : String
  }
  type RootQuery {
    users : Users
  }
  type RootMutation {
    createUsers (input: User) : Users
  }
  schema {
     query: RootQuery 
     mutation: RootMutation
  }
`);

