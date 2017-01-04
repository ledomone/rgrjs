import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;
MongoClient.connect('mongodb://localhost/rgrjs', (err, database) => {
  if (err) throw err;

  db = database;
  app.listen(3000, () => console.log('Listening on port 3000'));
});
