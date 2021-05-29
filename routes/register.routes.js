const app = require('express').Router()
const validation = require('../validators/register.validation')
const registerController = require('../controller/register.controller')


try {
    app.get('/' ,registerController.register)
} catch (error) {
    console.log('eroor el register',error);
}

try {
    app.post('/handleSignUp' ,validation ,registerController.handleSignup)
} catch (errorH) {
    console.log('error feh el handle signUp',errorH);
}


module.exports = app