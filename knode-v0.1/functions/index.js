const functions = require('firebase-functions');
const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

// User Functions
const { signup } = require('./handlers/onUserSignup')
const { login } = require('./handlers/onUserSignin')
const { getUserData} = require('./handlers/getUserData')

// Knode Functions
const { createKnode } = require('./handlers/onCreateKnode')


// user routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/userdata', getUserData)
app.post('/createknode', createKnode)


exports.api = functions.https.onRequest(app);