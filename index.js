const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config')

const typeDefs = gql`
  type Query{
    sayHi: String!
  }
`
// each query, mutation or sub has a resolver
const resolvers = {
  Query: {
    sayHi: () => 'Hello World!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
  // fine for ES6
  // aka typeDefs : typeDefs, resolvers : resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected')
    return server.listen({ port: 5000 });
  }).then((res) => {
    console.log(`Server running at ${res.url}`)
  });
