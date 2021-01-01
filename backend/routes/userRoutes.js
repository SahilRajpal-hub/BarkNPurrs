import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { Protect, admin } from '../middleware/authMiddleWare.js'
const router = express.Router()

router.post('/login', authUser)
router.route('/').post(registerUser).get(Protect, admin, getUsers)
router
  .route('/profile')
  .get(Protect, getUserProfile)
  .put(Protect, updateUserProfile)
router
  .route('/:id')
  .delete(Protect, admin, deleteUser)
  .get(Protect, admin, getUserById)
  .put(Protect, admin, updateUser)

export default router
