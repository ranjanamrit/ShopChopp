const router  = require("express").Router();
const categoryCtrl = require('../controller/categoryCtrl')
const auth = require('../middlewares/auth')


router.route('/category')
    .get(categoryCtrl.getCategories)


module.exports = router