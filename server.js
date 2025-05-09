const express = require('express');
const app = express();
const bcrypt = require("bcrypt") // Importing bcrypt package
const passport = require("passport")
const flash = require("express-flash")
const initializePassport = require("./passport-config")
const session = require("express-session")
const methodOverride = require("method-override")
const port = 4000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

const users = []

app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false
}))
app.use(passport.initialize()) 
app.use(passport.session())
app.use(methodOverride("_method"))

// Configuring the register post functionality
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))


app.post("/register", checkNotAuthenticated, async (req, res) => {

  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10); //hashing password
      users.push({
          id: Date.now().toString(), //user id
          name: req.body.name, //username
          email: req.body.email, //email
          password: hashedPassword, //password
      });
      console.log(users); // Display newly registered in the console
      res.redirect("/login");
      
  } catch (e) {
      console.log(e);
      res.redirect("/register")
  }
})

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login.hbs');
});

app.get('/register', (req, res) => {
  res.render('register.hbs');
});

app.delete("/logout", (req, res) => {
  req.logout(req.user, err => {
      if (err) return next(err)
      res.redirect("/")
  })
})

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return next()
  }
  res.redirect("/login")
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return res.redirect("/")
  }
  next()
}


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
