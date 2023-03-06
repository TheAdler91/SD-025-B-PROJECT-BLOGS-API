const { userService } = require('../services');

const insert = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userService.create(user);
        if (newUser) {
          return res.status(201).json({ token: newUser });
        }
        res.status(409).json({ message: 'User already registered' });        
    } catch (error) {
        return res.status(500).json({ message: 'Unexpected error', error: error.message });
    }
  };

  module.exports = {
    insert,
  };