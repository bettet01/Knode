const { db } = require('../util/admin');


exports.getUserData = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.body.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.user = doc.data();
        return res.status(200).json(userData)
      } else {
        return res.status(404).json({ error: 'User not found'})
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code})
    })
};