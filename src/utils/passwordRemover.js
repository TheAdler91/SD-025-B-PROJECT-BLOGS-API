const removePassword = (array) => array.map(({ dataValues }) => {
    const { password: _, ...newUser } = dataValues;
    return newUser;
  });

module.exports = removePassword;