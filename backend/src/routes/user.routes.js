const express = require('express');
const {CreateUser} = require('../contollers/user.controller')
const upload = require('../multer');

const router = expres.Router();

router.get('/create-user', upload.single('file'),CreateUser )

module.exports = router;