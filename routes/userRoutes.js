const multer = require('multer')
const express = require('express')

const router = express.Router()

const {
    createUser,
    readUsers,
    updateUser,
    deleteUser
} = require('../controllers/userControllers')

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

//POST
router.post("/", upload.single("file"), createUser);

//READ
router.get("/", readUsers);

//UPDATE
router.put("/:id", upload.single("file"), updateUser);

//DELETE
router.delete("/:id", deleteUser);

module.exports = router

