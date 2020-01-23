var {  buildSchema } = require('graphql');
module.exports  = buildSchema(  `
  input UserInput {
    firstName : String
    lastName : String
    email : String
    username : String
    password : String
  }
  type User {
    id : Int
    firstName : String
    lastName : String
    email : String
    username : String
    password : String
  }
  type RootQuery {
    users(input: UserInput) : User
  }
  type RootMutation {
    createUsers (input: UserInput) : User
  }
  schema {
     query: RootQuery 
     mutation: RootMutation
  }
`);

