const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json');

export const usersRepo = {
  getAll: () => users,
  getById: (id) => users.find((x) => x.id.toString() === id.toString()),
  find: (x) => users.find(x),
  create,
};

function create(user) {
  // generate new user id
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();

  // add and save user
  users.push(user);
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}
