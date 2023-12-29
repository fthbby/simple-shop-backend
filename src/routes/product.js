const {createProduct, getAll, update} = require('../controllers/product')

const router = require('express').Router()

router.post('/', createProduct)
router.get('/', getAll)
router.put('/',update)

module.exports = router