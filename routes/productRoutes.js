const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
  getCategorySummary,
  updateStock
} = require('../controllers/productController');

router.get('/low-stock', getLowStockProducts);
router.get('/summary', getCategorySummary);

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
router.patch('/:id/stock', updateStock);

module.exports = router;
