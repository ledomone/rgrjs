import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

// async anonymous function
(async () => {
  let db = await MongoClient.connect('mongodb://localhost/rgrjs');

  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));

  app.get("/data/links", (req, res) => {
      db.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;

        res.json(links);
      });
  });

  app.listen(3000, () => console.log('Listening on port 3000'));
})();
