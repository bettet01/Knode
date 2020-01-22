const functions = require('firebase-functions');
const express = require('express')
const admin = require('firebase-admin');


// init express and add to app
const app = express();
admin.initializeApp();
const db = admin.firestore();


