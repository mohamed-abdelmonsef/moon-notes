const bcrypt = require('bcrypt')
const userModel = require('../models/user.model');


module.exports.login = (req,res)=>{
    res.render('login' ,{exists:req.flash('exists') ,incorrect : req.flash('incorrect') ,oldInputs:req.flash('oldInputs') ,isLogged:false})
}


module.exports.handleSignin = async(req,res)=>{
    const {email ,password} = req.body
    let user = await userModel.findOne({email})
    if (user) {
        //check the password
        let match = await bcrypt.compare(password ,user.password)
        if (match) {
            //make session
            req.session.isLoggedin = true
            req.session.userId = user._id
            //redirect the user to home page
            res.redirect('/home')
        } else {
            //feedback message tell user that is wrong password
            req.flash('incorrect' ,true)
            req.flash('oldInputs' ,{email})
            res.redirect('/login')
        }
    } else {
        //feedback message..this email doesn't exist
        req.flash('exists' ,true)
        res.redirect('/login')
    }
}