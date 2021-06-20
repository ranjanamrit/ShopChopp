const router  = require("express").Router();
const productCtrl = require('../controller/productCtrl')
const auth = require('../middlewares/auth')
const authAdmin = require('../middlewares/authAdmin')

router.route('/products')
    .get(productCtrl.getProduct)
    .post(productCtrl.createProduct)


router.route('/products/:id')
    .put(productCtrl.updateProduct)
    .delete(productCtrl.deleteProduct)

module.exports = router