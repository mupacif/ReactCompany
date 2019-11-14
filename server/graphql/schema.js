var { graphql, buildSchema } = require('graphql');

module.export  = buildSchema(`
  type Query {
    hello: String
  }
  schema{
     query : Query 
  }
`);

