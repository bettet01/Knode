const functions = require('firebase-functions');
const express = require('express')
const app = express();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

// User Functions
const { signup } = require('./handlers/onUserSignup')
const { login } = require('./handlers/onUserSignin')
const { getUserData} = require('./handlers/getUserData')
const { uploadImage } = require('./handlers/onUploadUserImage')
const { getAuthenticatedUser} = require('./handlers/getAuthUser')

// Knode Functions
const { createKnode } = require('./handlers/onCreateKnode')


// user routes
app.post('/signup', signup);
app.post('/login', login);
app.get('/user/:handle', getUserData)
app.post('/createknode', createKnode)
app.post('/user/image', uploadImage)
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);