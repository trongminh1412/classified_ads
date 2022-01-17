const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import { apiHandler, usersRepo } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
  post: authenticate,
});

function authenticate(req, res) {
  const { email, password } = req.body;
  const user = usersRepo.find((u) => u.email === email);

  // validate
  if (!(user && bcrypt.compareSync(password, user.hash))) {
    throw 'email or password is incorrect';
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secondSecret, {
    expiresIn: '7d',
  });

  // return basic user details and token
  return res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email,
    phone: user.phone,
    token,
  });
}
