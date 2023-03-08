const { BlogPost, Category, User } = require('../models');

const findAll = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

module.exports = {
    findAll,
};