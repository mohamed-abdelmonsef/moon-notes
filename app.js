const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended : false }))
const mongoose = require('mongoose')
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: 'mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/notesProject',
  collection: 'mySessions'
});
var flash = require('connect-flash')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))
app.use(flash())


app.use(require('./routes/home.routes'))
app.use(require('./routes/log.routes'))
app.use(require('./routes/register.routes'))


app.get('*',(req,res)=>{
  res.send('404 page not found')
 })

mongoose.connect('mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/notesProject',{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
  console.log('DB is Connected');
}).catch(()=>{
  console.log('DB EROOoooR');
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is running');
})
