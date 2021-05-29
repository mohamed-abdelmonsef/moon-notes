module.exports = (req ,res ,next)=>{
    if (req.session.isLoggedin) {
        res.redirect('/home')
    } else {
        next()
    }
}