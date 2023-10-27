const express = require('express');
const router = express.Router();

const {newProduct, getProducts, getSingleProduct, updateProduct, deleteProduct, getAdminProducts} = require('../controllers/productController');

const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth')

router.post('/product/new',  isAuthenticatedUser, authorizeRoles('admin', 'encoder'), newProduct)
router.get('/products',  getProducts)
router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id',isAuthenticatedUser, ).put(updateProduct).delete(deleteProduct);
router.get('/admin/products', isAuthenticatedUser, getAdminProducts);
module.exports = router;