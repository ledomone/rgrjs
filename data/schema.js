import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';



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
        resolve: () => {} // TODO: Read from MongoDB
      }
    })
  })
});

export default schema;
