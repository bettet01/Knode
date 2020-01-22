const functions = require('firebase-functions');
const express = require('express')
const app = express();
const FBAuth = require('./util/firebaseAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

const { signup } = require('./handlers/onUserSignup')
const { login } = require('./handlers/onUserSignin')


// user routes
app.post('/signup', signup);
app.post('/login', login)


exports.api = functions.https.onRequest(app);