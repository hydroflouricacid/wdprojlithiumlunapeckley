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
