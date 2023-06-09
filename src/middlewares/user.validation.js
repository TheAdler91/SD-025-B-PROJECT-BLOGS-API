const schema = require('./schema/user.schema');

const validateUser = (req, res, next) => {
    const user = req.body;
    const { error } = schema.validate(user);
    if (error) {
      return res.status(400)
        .json({ message: error.details[0].message });
    }
  
    return next();
  };
  
  module.exports = {
    validateUser,
  };