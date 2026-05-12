const express=require("express");

const router=express.Router();

const studentController =require("../controllers/studentController");//controller

router.get("/",studentController.getAllStudents)
router.post("/",studentController.addStudent);
router.get("/:id",studentController.getSingleStudent);
router.put("/:id",studentController.editStudent);
router.delete("/:id",studentController.removeStudent)
module.exports=router;