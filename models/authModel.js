const pool = require("../config/db");

const createUser = async (name, email, password) => {
  const result = await pool.query(
    "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *",[name,email,password],
  );
  return result.rows[0];
};

const findUserByMail = async (email) => {
  const result = await pool.query("select * from users where email=$1",
    [email]);
  return result.rows[0];
};

module.exports={
  createUser,
  findUserByMail
}
