// controllers/studentController.js
const studentModel = require("../models/studentModel");

const addStudent = async (req, res) => {
  const { name, age, course } = req.body;

  try {
    const student = await studentModel.createStudent(name, age, course);
    res.status(201).json({
      message: "Student added successfully",
      data: student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllStudents = async (req, res) => {
  const students = await studentModel.getStudents();
  res.json(students);
};

const getSingleStudent = async (req, res) => {
  const students = await studentModel.getStudentById(req.params.id);
  res.json(students);
};

const editStudent = async (req, res) => {
  const { name, age, course } = req.body;
  await studentModel.updateStudent(req.params.id, name, age, course);
  res.json({
    message: "Student Updated",
  });
};

const removeStudent = async (req, res) => {
  await studentModel.deleteStudent(req.params.id);
  res.json({
    message: "Student deleted",
  });
};
module.exports = { addStudent, getAllStudents, getSingleStudent, editStudent ,removeStudent};
