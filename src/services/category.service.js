const { Category } = require('../models');

const insert = async (category) => {
    const result = await Category.create(category);
  
    return result;
  };

  module.exports = {
    insert,
  };
