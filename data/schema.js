import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

// NEED ACCESS TO MONGO DB
let Schema = (db) => {

  let linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString },
    })
  });

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          // GraphQL resolve function supports promises and mongodb driver also uses promises
          // - so we can write this:
          resolve: () => db.collection("links").find({}).toArray()
        }
      })
    })
  });

  return schema
};

export default Schema;
