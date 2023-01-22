const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => method = GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => method = POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;