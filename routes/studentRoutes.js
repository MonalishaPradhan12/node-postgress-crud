const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController"); //controller
const authMiddleware = require("../middleware/authMiddleware");
router.get("/", authMiddleware, studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getSingleStudent);
router.put("/:id", studentController.editStudent);
router.delete("/:id", studentController.removeStudent);
module.exports = router;
