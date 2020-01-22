const admin = require('firebase-admin');

var serviceAccount = require("./private-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://knode-795ef.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };