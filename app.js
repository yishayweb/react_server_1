const express = require('express');
const path = require('path');

const app = express();

/*app.get('/', (req, res) => {
  res.send("hello");
});*/

app.get('/hello', (req, res) => {
  res.send("hello the");
});

app.use(express.static(path.join(__dirname, 'react-server/build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
