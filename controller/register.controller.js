const {validationResult} = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')


module.exports.register = (req,res)=>{
    res.render('register',{errors :req.flash('errors'),oldInputs:req.flash('oldInputs') ,exists:req.flash('exists') ,isLogged:false})
}


module.exports.handleSignup = async(req,res)=>{
    const {name,email,password} = req.body
    let errors = validationResult(req)
    if (errors.isEmpty()) {
        //insert into db
        let user = await userModel.findOne({email})
        if (user) {
           //exists
           req.flash('exists',true)
           res.redirect('/') 
        } else {
            bcrypt.hash(password ,7 ,async(err,hash)=>{
                await userModel.insertMany({name ,email ,password:hash})
                res.redirect('/login')
            })
        }
        
    } else {
        //feedback message
        req.flash('errors',errors.array())
        req.flash('oldInputs',{name,email,password})
        res.redirect('/')
    }

}