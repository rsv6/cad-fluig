const router = require('express').Router()

router.use('/', require('./home'))
router.use('/', require('./selectAll'))

module.exports = router