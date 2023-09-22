var express = require('express');
var cors = require('cors');
var redis = require('redis');

var app = express();
var client = redis.createClient();

(async () => {
  await client.connect();
})();

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/', (req, res) => {
  client.incr('visits').then((visits) => {
    res.send({
      visits: visits
    });
  });
});

app.listen(3001, () => {
  console.log('Sample express app listening on port 3001!');
});
