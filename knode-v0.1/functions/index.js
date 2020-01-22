const functions = require('firebase-functions');
const express = require('express')
const admin = require('firebase-admin');


// init express and add to app
const app = express();
admin.initializeApp();
const db = admin.firestore();


exports.postOneScream = (req, res) => {
    if(req.body.body.trim() === '') {
        return res.status(400).json({ body: 'Body must not be empty'})
    }
    const newScream = {
        body: req.body.body,
        userHandle: req.user.handle,
        createdAt: new Date().toISOString()
    }

    db
        .collection('screams')
        .add(newScream)
        .then((doc) => {
            return res.json({ message: `document ${doc.id} created succussfully` });
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong'});
            console.log(err);
        })
}
