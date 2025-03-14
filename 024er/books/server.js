const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const fs = require('node:fs');
const app = express();
const port = 80;

const domain = 'http://books.final/';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const top = _ => {
  app.get('/create', (req, res) => {
    const file = fs.readFileSync('./html/create.html', 'utf8');
    const template = handlebars.compile(file);
    const data = { manoKintamasis: 'Labas' };
    const html = template(data);
}
  )};

  // ROUTES

app.get('/create', (req, res) => {
  const file = top + fs.readFileSync('./html/create.html', 'utf8') + bottom;
   const template = handlebars.compile(file);
  const data = { 
    manoKintamasis: 'Labas',
    pageTitle: 'Nauja knyga',
    domain: domain
  };
  const html = template(data);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Knygynas darbui pasiruošęs ant ${port} porto!`);
});