const express = require("express");
const router = express.Router()
const userControllers = require('../controllers/UserControllers');
const { authMiddleWare, authUserMiddleWare } = require('../middleware/authMiddleware');

router.post('/sign-up', userControllers.createUser)
router.post('/sign-in', userControllers.loginUser)
router.post('/log-out', userControllers.logoutUser)
router.put('/update-user/:id', userControllers.updateUser)
router.delete('/delete-user/:id', userControllers.deleteUser)
router.get('/getAll', userControllers.getAllUser)
router.get('/get-details/:id', userControllers.getDetailsUser)
router.post('/refresh-token', userControllers.refreshToken)
router.post('/delete-many', userControllers.deleteMany)

module.exports = router