var {  buildSchema } = require('graphql');

module.exports  = buildSchema(`
  type UserT {
    user:String
    password:String
  }
  type RootQuery {
    hello: String!
    test1 : String
    user: UserT
  }
  type RootMutation {
    createUser(test: String!): String!
  }
  schema {
     query: RootQuery 
     mutation: RootMutation
  }
`);

