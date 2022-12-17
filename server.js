require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/logs.js');

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));



// Connect to Mongodb  / remove deprication
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})


app.get('/logs', (req, res)=>{
    res.send('Welcome to Captains_logs');
})
//INDEX ROUTE
app.get('/logs', (req, res)=>{
   res.send('Index') 
})

// NEW ROUTE
app.get('/logs/new', (req, res)=>{
    res.render('New');
})

// POST //Create
app.post('/logs', (req, res)=>{
    // console.log(req.body)
    // res.send('received')

if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
} else {
    req.body.shipIsBroken = false
}
Log.create(req.body, (error, createdLog)=>{
    res.send(createdLog);
})
})












app.listen(3000, ()=>{
    console.log('listening');
})