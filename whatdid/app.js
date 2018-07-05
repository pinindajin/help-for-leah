const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json()); // for parsing application/json
app.use(bodyparser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

let things = [
  'Kissed Puppy',
  'Tooted Louadly',
  'Ran 50 Miles',
  'Cooked Dinner',
  'Ate Dinner',
  'Drank Tasty Wine'
];

app.get('/', (req, res) => {
  res.json('DEFAULT ROUTE');
});

app.get('/api/things', (req, res) => {
  res.json({
    things
  });
});

app.post('/api/things', (req, res) => {
  const thing = req.body.thing;
  console.log(`Adding a thing ... ${thing}`)
  things.push(thing);
  res.json({
    things
  })
});

app.listen(3000, () => {
  console.log('Thing Server Started - Is Healthy');
});