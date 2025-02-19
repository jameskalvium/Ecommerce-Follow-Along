const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middlewares/jwt-verify.js')
const verifyUser = require('../middlewares/jwt-verify.js');
router.post('/confirm-order', verifyToken)

const {
    GetUserOrdersController, 
    CreateOrderController,
    CancelOrder
} = require('../controllers/order.controller.js');

router.get('/user-orders-data', verifyUser, GetUserOrdersController);
router.post('/confirm-order', verifyUser, CreateOrderController);

router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports = router;