const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const TypeDefs = require('./schema');
const Resolvers = require('./resolvers');
const dotenv = require('dotenv');
dotenv.config();
const mongodb_atlas_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_atlas_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection');
}).catch(err => {
    console.log('Error Mongodb connection');
    console.log(err);
});

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});

const app = express();
app.use(bodyParser.json());
app.use('*', cors());

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT }, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
});