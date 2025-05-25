const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be atleast 3 character long"),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 character long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Vechile color atleast 3 character long"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Vechile plate number atleast 3 character long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("The capacity atlest 1"),
    body('vehicle.vehicalType').isInt(['car', 'motorcycle', 'auto']).withMessage('Invalid vechile type')
],
    captainController.registerCaptain
)

router.post('/login', [
    body('email', isEmail().withMessage('Invalid Email')),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 character long')
], captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware, captainController.logoutCaptain)

module.exports = router;