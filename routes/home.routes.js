const app = require('express').Router()
const auth = require('../middleware/auth.home')
const homeController = require('../controller/home.controller')

try {
    app.get('/home' ,auth ,homeController.home)
    app.post('/addNote' ,homeController.addNote)
    app.post('/delete' ,homeController.delete)
    app.post('/editNote',homeController.editNote)
    app.get('/logout',homeController.logout) 


} catch (error) {
    console.log('el EROOR AHO',error);
}

module.exports = app