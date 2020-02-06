const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./app/graphql/typedefs');
const resolvers = require('./app/graphql/resolvers');
const models = require('./app/db/models');

const server = new ApolloServer({
  typeDefs: gql`
      ${typeDefs}
  `,
  resolvers,
  context: ({ req }) => {
    
    const { authorization: token } = req.headers;

    return { models, token };
  }
});


server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});


