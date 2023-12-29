const {createProduct, getAll, update, destroy, getAllByUser} = require('../controllers/product')

const router = require('express').Router()

router.post('/', createProduct)
router.get('/', getAll)
router.get('/:id', getAllByUser)
router.put('/',update)
router.delete('/:id', destroy)


module.exports = router