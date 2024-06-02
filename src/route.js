const express = require('express');
const router = express.Router();
const Controller = require('./controller');






router.post('/order', Controller.orderCreate);
router.get('/fetchOrderById', Controller.fetchOrderById);





module.exports = router;
