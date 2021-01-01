import express from 'express'
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  craeteProductReview,
  getTopProducts,
} from '../controllers/productConroller.js'
import { Protect, admin } from '../middleware/authMiddleWare.js'

const router = express.Router()

router.route('/').get(getProducts).post(Protect, admin, createProduct)
router.route('/:id/reviews').post(Protect, craeteProductReview)
router.get('/top', getTopProducts)

router
  .route('/:id')
  .get(getProductById)
  .delete(Protect, admin, deleteProduct)
  .put(Protect, admin, updateProduct)

export default router
