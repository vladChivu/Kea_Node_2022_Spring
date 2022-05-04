import express from "express";
const app = express();

app.use(express.static("public"));

import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        description: "The Root Query Type",
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => "world"
            }
        }
    })
});

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(3000);
