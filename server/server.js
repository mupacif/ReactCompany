const express = require('express');
const graphqlHttp  = require('express-graphql');
const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolver')

var app = express();
const PORT = 1337;


// Serve the Parse API on the /parse URL prefix
app.use('/graphql', graphqlHttp({
    schema : graphqlSchema,
    rootValue : graphqlResolver
}));

app.listen(PORT, function() {
});

