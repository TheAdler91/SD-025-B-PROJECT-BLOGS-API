const { User } = require('../models');
const { genarateToken } = require('../utils/token');

const userLogin = async (email, password) => {
    const logedIn = await User.findOne(
      { where: { email, password } },
      );
      
    if (logedIn) {
      return genarateToken(logedIn);
    }
    return logedIn;
  };

  module.exports = { userLogin };