const express = require('express');
const multer= require('multer');

const {
  CreateUser,
  verifyUserController,
  signup,
  login,
  getUserData,
  GetAddressController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const upload = multer({ dest: 'temp-uploads/' });

const verifyUser = require('../middlewares/jwt-verify.js');

const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);

router.post('/signup',upload.single('file'), signup);
router.post('/login', login);

router.get('/user-data', verifyUser, getUserData);
router.get('/get-addresses', verifyUser, GetAddressController)

module.exports = router;