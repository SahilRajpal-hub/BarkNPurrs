import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders,
  getOrders,
  updateOrderToDeliver,
} from '../controllers/orderController.js'
import { Protect, admin } from '../middleware/authMiddleWare.js'

router.route('/').post(Protect, addOrderItems).get(Protect, admin, getOrders)
router.route('/myorders').get(Protect, getMyOrders)
router.route('/:id').get(Protect, getOrderById)
router.route('/:id/pay').put(Protect, updateOrderToPay)
router.route('/:id/deliver').put(Protect, admin, updateOrderToDeliver)

export default router
