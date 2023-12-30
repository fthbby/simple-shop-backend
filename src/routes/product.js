const {createProduct, getAll, update, destroy, getAllByUser, getById} = require('../controllers/product')

const router = require('express').Router()

router.post('/', createProduct)
router.get('/', getAll)
router.get('/user/:id', getAllByUser)
router.get('/:id',getById)
router.put('/',update)
router.delete('/:id', destroy)


module.exports = router