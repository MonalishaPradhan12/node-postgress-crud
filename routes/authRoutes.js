const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

const authMiddleWare = require("../middleware/authMiddleware");

router.post("/signup", authController.signUp);

router.post("/login", authController.login);

router.get("/profile", authMiddleWare, (req, res) => {
  console.log("req",req)
  res.json({
    message: "Welcome User",
    user: req.user,
  });
});

module.exports = router;
