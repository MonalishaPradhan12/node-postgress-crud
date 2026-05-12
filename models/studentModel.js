const pool = require("../config/db");

const getStudents = async () => {
  const result = await pool.query("SELECT * FROM students");

  return result.rows;
};

const getStudentById = async (id) => {
  const result = await pool.query("SELECT * FROM students WHERE id=$1", [id]);
  return result.rows[0];
};

const createStudent = async (name, age, course) => {
  const result = await pool.query(
    "INSERT INTO students(name, age, course) VALUES($1, $2, $3) RETURNING *",
    [name, age, course],
  );

  return result.rows[0];
};

const updateStudent = async (id, name, age, course) => {
  await pool.query("UPDATE students SET name=$1,age=$2,course=$3 WHERE id=$4", [
    name,
    age,
    course,
    id,
  ]);
};

const deleteStudent = async (id) => {
  await pool.query("DELETE FROM students WHERE id=$1", [id]);
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
