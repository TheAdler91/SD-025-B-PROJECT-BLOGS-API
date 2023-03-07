const { Category } = require('../models');

const findAll = async () => Category.findAll();

const insert = async (category) => {
    const newCategory = await Category.create(category);
  
    return newCategory;
  };

  module.exports = {
    insert,
    findAll,
  };
