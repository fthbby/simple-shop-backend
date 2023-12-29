const {createProduct, getAll, update, destroy} = require('../controllers/product')

const router = require('express').Router()

router.post('/', createProduct)
router.get('/', getAll)
router.put('/',update)
router.delete('/:id', destroy)


module.exports = router