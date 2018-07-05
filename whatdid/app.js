const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('DEFAULT ROUTE');
});

app.get('/api/things', (req, res) => {
  res.json('hello myself');
});

app.listen(3000, () => {
  console.log('Thing Server Started - Is Healthy');
});