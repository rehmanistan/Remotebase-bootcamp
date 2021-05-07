const jwt = require('jsonwebtoken');
const PRIV_KEY = require('./key').secretOrKey;

const auth = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header) {
    res.status(500).send({message: 'Not authorized'});
  } else {
    try {
      const token = await header.split(' ')[1];
      let decodedData = jwt.verify(token, PRIV_KEY);
      req.body.userId = decodedData?.id;
      next();
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = auth;
