const mysql2 = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;
//middleware
app.use(express.json());

const DBConnection = mysql2.createConnection({
  host: "127.0.0.1", //localhost
  port: 3306,
  user: "hossam",
  password: "123456789",
  database: "blogapp",
});

DBConnection.connect((err) => {
  if (err) {
    console.error("Fail to connect DB");
  } else {
    console.log("Connection to DB Established");
  }
});

//get all users
app.get("/", (req, res, next) => {
  DBConnection.execute(`SELECT * FROM users`, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "fail to excute this qurery", err });
    } else {
      return res.status(200).json({ message: "Done", data, err });
    }
  });
});
//get profile
app.get("/user/:id/profile", (req, res, next) => {
  const { id } = req.params;
  DBConnection.execute(
    `SELECT u_id as id , concat(u_firstName," ",u_lastName) as userName FROM USERS WHERE u_id=?`,
    [id],
    (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Fail to excute this query", err });
      }
      return res.json({ message: "Done", user: date[0] });
    },
  );
});
//update
app.patch("/user/:id", (req, res, next) => {
  const { id } = req.params;
  const { gender, DOB } = req.body;
  DBConnection.execute(
    `UPDATE USERS SET u_DOB=? , u_gender=? where u_id=?`,
    [DOB, gender, id],
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: "fail to excute this query" });
      }
      return data.affectedRows
        ? res.json({ message: "Done", data })
        : res.status(404).json({ message: "In valid account id" });
    },
  );
});
//delete
app.delete("/user/")

//signup
app.post("/auth/signup", (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  DBConnection.execute(
    `SELECT u_email FROM users WHERE u_email = ?`,
    [email],
    (err, data) => {
      if (err) return next(err);

      if (data.length) {
        return res.status(409).json({ message: "Email already exists" });
      }

      DBConnection.execute(
        `INSERT INTO users (u_firstName, u_lastName, u_email, u_password)
         VALUES (?, ?, ?, ?)`,
        [firstName, lastName, email, password],
        (err, result) => {
          if (err) return next(err);

          return res.status(201).json({
            message: "User created successfully",
            result,
          });
        },
      );
    },
  );
});

//login
app.post("/auth/login", (req, res, next) => {
  const { email, password } = req.body;

  DBConnection.execute(
    `SELECT u_email FROM users WHERE u_email = ? and u_password=?`,
    [email, password],
    (err, data) => {
      if (err) return next(err);

      if (!data.length) {
        return res.status(404).json({ message: "Email and password mismatch" });
      }
      return res.status(200).json({ message: "Done", user: data[0].u_id });
    },
  );
});

app.listen(port, () => {
  console.log(`server is running on port :::: ${port}`);
});
