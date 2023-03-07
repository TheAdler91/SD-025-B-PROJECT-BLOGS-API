const { User } = require('../models');
const { genarateToken } = require('../utils/token');
const { ocult: ocultPaswword } = require('../utils');

const findByEmail = async (email) => {
    const result = await User.findOne({
      where: { email },
    });
    return result;
  };

const getAll = async () => {
    const result = await User.findAll();
      return ocultPaswword(result);
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
    getAll,
  };