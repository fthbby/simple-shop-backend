const {createProduct, getAll} = require('../controllers/product')

const router = require('express').Router()

router.post('/', createProduct)
router.get('/', getAll)

module.exports = router