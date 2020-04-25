const router = require('express').Router();
const ProductsController = require('../controllers/products.controller')

router.get('/getAll',ProductsController.getAllProduct);

router.get('/get/:id',ProductsController.getProduct);

router.get('/ejs',ProductsController.renderHtml);

module.exports = router;