// no testing done yet, not sure if this works

const { db } = require('../util/admin');

exports.createKnode = (req, res) => {
  // these options are required
  const pathData = {
    subject: req.body.subject,
    discipline: req.body.discipline,
    knodeName: req.body.knodeName,
    handle: req.body.handle
  };
  const knodeData = {
    createdAt: new Date().toISOString(),
    prerequisites: req.body.prerequisites,
    postrequisites: req.body.postrequisites,
  }


  db.doc(`knodeData/${pathData.subject}/${pathData.discipline}/${pathData.knodeName}`)
  .set(knodeData)
  .then((doc) => {
    let batch = db.batch();

    if(req.body.hasOwnProperty('descriptions')){
      const descriptionsData = {
        handle: req.body.handle,
        createdAt: new Date().toISOString(),
        descriptionText: req.body.descriptions.descriptionText,
        downvoteCount: 0,
        upvoteCount: 1
      };
      let descriptionsPath = db.doc(`knodeData/${pathData.subject}/${pathData.discipline}/${pathData.knodeName}`).collection('descriptions').doc()
      batch.set(descriptionsPath , descriptionsData)
    }
    if(req.body.hasOwnProperty('examples')){
      const examplesData =  {
        handle: req.body.handle,
        createdAt: new Date().toISOString(),
        exampleText: req.body.examples.exampleText,
        downvoteCount: 0,
        upvoteCount: 1
      };
      let examplesPath = db.doc(`knodeData/${pathData.subject}/${pathData.discipline}/${pathData.knodeName}`).collection('examples').doc()
      batch.set(examplesPath, examplesData)
    }
    if(req.body.hasOwnProperty('practices')){
      const practicesData = {
        handle: req.body.handle,
        createdAt: new Date().toISOString(),
        practiceText: req.body.practices.practiceText,
        answerList: req.body.practices.answerList,
        downvoteCount: 0,
        upvoteCount: 1
      }
      let practicesPath = db.doc(`knodeData/${pathData.subject}/${pathData.discipline}/${pathData.knodeName}`).collection('practices').doc()
      batch.set(practicesPath, practicesData)
      }

    return batch.commit()
    })
  .then((data) => {
    console.log("got to return")
    return res.status(302).json({ data: data })
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).json({ error: err.code})
  })
  
};

