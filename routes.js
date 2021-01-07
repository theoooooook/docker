
const express = require('express')
const parkingsAPI = require('./API/parkingsAPI')
const router = express.Router()

router.get('/parkings', parkingsAPI.getParkings)
router.get('/parkings/:id', parkingsAPI.getParking)
router.post('/parkings', parkingsAPI.createParking)
router.put('/parkings/:id', parkingsAPI.replaceParking)
router.patch('/parkings/:id', parkingsAPI.updateParking)
router.delete('/parkings/:id',parkingsAPI.removeParking)

module.exports = router