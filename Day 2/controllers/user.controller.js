const fs = require("fs");

const getData = () => {
  return JSON.parse(fs.readFileSync("./db.json", "utf8"));
};

const saveData = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
};

const getUsers = (req, res) => {
  const data = getData();

  let users = data.users;

  if (req.query.name) {
    users = users.filter((user) =>
      user.name.toLowerCase().includes(req.query.name.toLowerCase()),
    );
  }

  res.json(users);
};

const getUserById = (req, res) => {
  const data = getData();

  const user = data.users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const data = getData();

  const newUser = {
    id: Date.now(),
    ...req.body,
  };

  data.users.push(newUser);

  saveData(data);

  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const data = getData();

  const user = data.users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  user.age = req.body.age;

  saveData(data);

  res.json(user);
};

const patchUser = (req, res) => {
  const data = getData();

  const user = data.users.find((user) => user.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  Object.assign(user, req.body);

  saveData(data);

  res.json(user);
};

const deleteUser = (req, res) => {
  const data = getData();

  data.users = data.users.filter((user) => user.id !== Number(req.params.id));

  saveData(data);

  res.json({
    message: "User deleted successfully",
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};
