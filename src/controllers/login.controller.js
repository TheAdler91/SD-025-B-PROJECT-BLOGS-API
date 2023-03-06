const { loginService } = require('../services');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
      const user = await loginService.userLogin(email, password);
      if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
      }
    
      res.status(200).json({ token: user });    
  } catch (error) {
    return res.status(500).json({ message: 'Unexpected error', error: error.message });
  }  
  };

  module.exports = { userLogin };