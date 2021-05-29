const app = require('express').Router()
const auth = require('../middleware/auth.login')
const loginController = require('../controller/login.controller')

try {
    app.get('/login' ,auth ,loginController.login)
} catch (error) {
    console.log('there is an error in rendering login',error);
}

try {
    app.post('/handleSignin' ,loginController.handleSignin)
} catch (error) {
    console.log('there is an error in handling login',error);
}

module.exports = app