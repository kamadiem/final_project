
// load envirements variables
require('dotenv').config()
// import required libraries
const express = require("express")
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// Load controllers
const Login = require('./controller/auth/login');
const Register = require('./controller/auth/register');
const SpeachController = require('./controller/speach_controller');

// initialize the express app
const app = express();

// load middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Auth middleware
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = data.id;
        req.username = data.username;
        return next();
    } catch (e) {
        console.error(e)
        return res.sendStatus(403);
    }
};


// Load routes
app.use('/login', Login);
app.use('/register', Register);
app.use('/text2speach', authorization, SpeachController);


app.get("/logout", authorization, (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out" });
});


// run application listening on port from .env file 
// @param {number} port
app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);