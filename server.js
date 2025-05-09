const fs = require('fs');
const express = require('express');
const app = express();
const port = 4000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name } = req.body;
  res.render('result', { title: 'Form Submission', name });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const data = { name, email, message, date: new Date().toISOString() };

  fs.readFile('contact-submissions.json', 'utf8', (err, fileData) => {
    let submissions = [];
    if (!err && fileData) submissions = JSON.parse(fileData);
    submissions.push(data);
    fs.writeFile('contact-submissions.json', JSON.stringify(submissions, null, 2), err => {
      if (err) return res.status(500).send('Error saving submission.');
      res.send('Success');
    });
  });
});

app.post('/flick', (req, res) => {
  const { playerName, score } = req.body;
  const data = { playerName, score, date: new Date().toISOString() };

  fs.readFile('flick-scores.json', 'utf8', (err, fileData) => {
    let scores = [];
    if (!err && fileData) scores = JSON.parse(fileData);
    scores.push(data);
    fs.writeFile('flick-scores.json', JSON.stringify(scores, null, 2), err => {
      if (err) return res.status(500).send('Error saving score.');
      res.send('Success');
    });
  });
});