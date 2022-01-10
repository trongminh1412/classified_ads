const bcrypt = require('bcryptjs');

import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
  post: register,
});

function register(req, res) {
  // split out password from user details
  const { password, confirmPassword, ...user } = req.body;

  // validate
  if (usersRepo.find((x) => x.email === user.email))
    throw `User with the email "${user.email}" already exists`;

  // hash password
  user.hash = bcrypt.hashSync(password, 10);
  user.hash = bcrypt.hashSync(confirmPassword, 10);

  usersRepo.create(user);
  return res.status(200).json({});
}
