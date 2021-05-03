const router = require('express').Router()

// HOME:
router.use('/', require('./home'))

// CRUD:
router.use('/', require('./selectAll'))
// router.use('/', require('./select'))
// router.use('/', require('./insert'))
router.use('/', require('./update'))
// router.use('/', require('./delete'))

module.exports = router