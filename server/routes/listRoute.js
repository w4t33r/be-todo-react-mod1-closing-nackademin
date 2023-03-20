const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const {getList, saveList, updateList, deleteList} = require("../controllers/listController");

router.get('/',  getList)
router.post('/save', authMiddleware, saveList)
router.post('/update', authMiddleware, updateList)
router.post('/delete', authMiddleware, deleteList)


module.exports = router