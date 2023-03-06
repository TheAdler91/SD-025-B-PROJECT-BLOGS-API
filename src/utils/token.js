const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };

const genarateToken = (data) => {
  const { password: _, ...payload } = data.dataValues;
  const token = jwt.sign({ payload }, secret, jwtConfig);
  return token;
};

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const { payload } = jwt.verify(token, secret);

    req.user = payload;

     next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = {
    genarateToken,
    tokenValidation,
};