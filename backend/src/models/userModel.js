const users = [];
let nextId = 1;

const UserModel = {
  findByEmail(email) {
    return users.find((user) => user.email === email) || null;
  },

  findById(id) {
    return users.find((user) => user.id === id) || null;
  },

  create({ name, email, hashedPassword }) {
    const newUser = {
      id: nextId++,
      name,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    return newUser;
  },
};

module.exports = UserModel;
