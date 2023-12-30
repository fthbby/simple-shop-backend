const {getAll, getUserById} = require('../controllers/user')

const router = require("express").Router();

router.get('/', getAll)
router.get('/:id', getUserById)

module.exports = router