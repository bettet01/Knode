const { db } = require('../util/admin')



exports.getCategoryData = (req, res) => {
  let subjectData = {
    subjects: {}
  };
  db.doc(`knodeData/${req.params.subject}`)
    .listCollections()
    .then(collectionReferences => {
      collectionReferences.forEach(collection => {
        subjectData.subjects[collection.id] = collection.id
    })
      return res.json(subjectData)
    }).catch((err) => {
      console.log(err)
    })
}