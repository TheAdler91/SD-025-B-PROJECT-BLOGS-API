const { User } = require('../models');
const { genarateToken } = require('../utils/token');

const findByEmail = async (email) => {
    const result = await User.findOne({
      where: { email },
    });
    return result;
  };

const insert = async (user) => {
    const exists = await findByEmail(user.email);
    if (exists) {
      return null;
    }
    const result = await User.create(user);
  
    return genarateToken(result);
  };

  module.exports = {
    insert,
  };