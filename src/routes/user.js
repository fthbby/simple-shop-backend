const {getAll, getUserById, uploadAvatar, deleteAvatar, updateUser} = require('../controllers/user')

const router = require("express").Router();

router.get('/', getAll)
router.put('/:id',updateUser)

router.get('/:id', getUserById)
router.post('/image', uploadAvatar)
router.put('/image', deleteAvatar)

module.exports = router