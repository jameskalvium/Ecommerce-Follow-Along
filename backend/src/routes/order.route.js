const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/jwt-verify.js')
const verifyUser = require('../middlewares/jwt-verify.js');

const {
    CreateOrderContoller,
    GetUserOrdersController,
    CancelOrder,
} = require('../controllers/order.controller.js');


router.get('/user-orders-data', verifyUser, CreateOrderContoller);
router.post('/confirm-order', verifyUser, GetUserOrdersController);

router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports = router;

