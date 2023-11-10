const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const path = require('path');
const sessionTimeout = 30 * 60 * 1000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'secretsarebad',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: sessionTimeout }
  })
);

// Simulated user database
const users = [];

// Login route
app.get('/login', (req, res) => {
      console.log(__dirname);
      res.sendFile(__dirname + "/home.html");
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);
    console.log(username + " : " + password); 

    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(401).send('User not found');
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
        req.session.user = user;
        res.send('Login successful');
        } else if (err) {
            res.status(500).send('Internal server error');
        }
        
        else {
        res.status(401).send('Incorrect password');
        }
    });
});

// Register route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username + " : " + password);  
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send('Internal server error');
    }
    const newUser = { username, password: hash };
    users.push(newUser);
    res.send('User registered');
  });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

//protected route
app.get('/', (req, res) => {
    if (req.session.authenticated) {
        console.log(__dirname);
        res.sendFile(__dirname + "/home.html");
    } else {
        res.redirect("/login");
    }
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
