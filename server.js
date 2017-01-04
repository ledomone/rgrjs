import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

app.listen(3000);

MongoClient.connect('mongodb://localhost/rgrjs', (err, database) => {
  if (err) throw err;

  database.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    console.log(links);
  });
});
