const { userService } = require('../services');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (user) {
      return res.status(200).json(user);
    }
  
    res.status(404).json({ message: 'User does not exist' });    
  } catch (error) {
    return res.status(500).json({ message: 'Unexpected error', error: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const allUsers = await userService.getAll();
  
    res.status(200).json(allUsers);    
  } catch (error) {
    return res.status(500).json({ message: 'Unexpected error', error: error.message });
  }
};

const insert = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userService.insert(user);
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
    getAll,
    findById,
  };