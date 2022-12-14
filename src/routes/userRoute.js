const express = require('express');
const router = express.Router();
const apiRoutes = require('../Services/Handlers/userHandler');
const verifyToken= require('../middlewares/authorized');
const uploadImage = require('../Services/Handlers/imageUploader')

router.get('',apiRoutes.getAllUser);
router.get('/:id',verifyToken, apiRoutes.getUserById);
router.put('/:id',verifyToken ,apiRoutes.updateUserById);
router.delete('/:id', verifyToken,apiRoutes.deleteUserById);
router.post('/updatedImage/:id',verifyToken,uploadImage,apiRoutes.updateImageById)
module.exports = router;
