const express = require('express');
const multer= require('multer');

const {
  CreateUser,
  verifyUserController,
  signup,
  login,
  getUserData,
  AddAddressController,
  DeleteAddyController,
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
router.post('/add-addresses', verifyUser, AddAddressController)
router.delete('/delete-address/:id', verifyUser, DeleteAddyController);
// router.get('/order-confirmation',verifyUser,)

module.exports = router;