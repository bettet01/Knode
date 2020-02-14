const { db } = require('../util/admin')


exports.getAuthenticatedUser = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.handle}`)
    .get()
    .then((doc) => {
      if(doc.exists) {
        userData = doc.data();
      }
      return res.json(userData)
    }).catch((err) =>{
      console.log(err)
    })
}