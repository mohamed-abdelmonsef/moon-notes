
const noteModel = require('../models/note.model')


module.exports.home = async(req,res)=>{
    let notes =await noteModel.find({userId:req.session.userId})
    res.render('home' ,{isLogged:req.session.isLoggedin ,notes})  
}

module.exports.addNote = async(req,res)=>{
    const {title ,desc} = req.body
    await noteModel.insertMany({userId:req.session.userId ,title ,desc})
    res.redirect('/home')
}

module.exports.delete = async(req,res)=>{
    await noteModel.findByIdAndDelete({_id:req.body.delete})
    res.redirect('/home')
}

module.exports.editNote = async(req,res)=>{
    const {_id,title,desc} = req.body
    await noteModel.findByIdAndUpdate({_id},{title ,desc})
    res.redirect('/home')
}

module.exports.logout = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}