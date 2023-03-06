const { bodyValidation } = require('./schema/login.schema');

const loginFieldValidation = (req, res, next) => {
    const login = req.body;
    const { error } = bodyValidation.validate(login);
    if (error) {
      const [detail] = error.details;
      if (detail.type === 'string.empty' || detail.type === 'any.required') {
        return res.status(400)
          .json({ message: 'Some required fields are missing' });
      }
    }
  
    return next();
  };

//   const loginFieldValidation = (req, res, next) => {
//     const { name } = req.body;
//     if (!name) return res.status(400).json({ message: 'Some required fields are missing' });
//     return next();
//   };

  module.exports = loginFieldValidation;