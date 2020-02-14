const { db } = require('../util/admin')



exports.getSubjectData = (req, res) => {
  let knodeData = {};
  db.collection('knodeData')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
          knodeData[doc.id] = doc.id
      })
      return res.json(knodeData)
    }).catch((err) => {
      console.log(err)
    })
}