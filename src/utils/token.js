const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

const genarateToken = (data) => {
  const { password: _, ...payload } = data.dataValues;
  const token = jwt.sign({ payload }, secret, jwtConfig);
  return token;
};

module.exports = {
    genarateToken,
};