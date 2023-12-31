const express = require("express");
const router = express.Router()
const ProductControllers = require('../controllers/ProductControllers');
const { authMiddleWare } = require('../middleware/authMiddleware');

router.post('/create', ProductControllers.createProduct)
router.put('/update/:id', ProductControllers.updateProduct)
router.get('/get-details/:id', ProductControllers.getDetailsProduct)
router.delete('/delete/:id', authMiddleWare, ProductControllers.deleteProduct)
router.get('/get-all', ProductControllers.getAllProduct)
router.post('/delete-many', ProductControllers.deleteMany)
router.get('/get-all-type', ProductControllers.getAllType)

module.exports = router