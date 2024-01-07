const express = require('express')
const {
  getProductById,
  getAllProduct,
  getProductBySubCategory,
} = require('../controller/productController')

const router = express.Router()

router.get('/', getAllProduct)
router.get('/subcategory/:id', getProductBySubCategory)

module.exports = { productRouter: router }
