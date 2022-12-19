require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/logs.js');
const methodOverride = require('method-override');
// Middleware
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));


// Connect to Mongodb  / remove deprication
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})




//INDEX ROUTE
app.get('/logs', (req, res)=>{
//    res.send(logs) 
Log.find({},(error,allLogs)=>{
    res.render('Index',{
        logs:allLogs
    })
})

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
    // res.send(createdLog);
    res.redirect('/logs');  
})
})
// SHOW ROUTE
app.get('/logs/:id', (req, res)=>{
    // res.send(logs[req.params.id]);
    Log.findById(req.params.id, (err, foundLog)=>{
    res.render('Show', {
             log:foundLog
        })
    })
    })
    //EDIT ROUTE
 app.get('/logs/:id/edit', (req, res)=>{
     //find my log by id
    //render an edit form
    //pass in the log data / payload
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('Edit', {
            log:foundLog
        })
    })
 }) 
 //Put/ UPDATE
app.put('/logs/:id', (req, res)=>{
    //check if the ship is broken
    //find log by id and update it
    //redirect to the log show page
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
    console.log(updatedLog);
    res.redirect(`/logs/${req.params.id}`);
    })
})
//Delete Route
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id,(err, deletedLog)=>{
        console.log("DELETED", deletedLog)
     res.redirect('/logs')
    })
})
   













app.listen(3000, ()=>{
    console.log('listening');
})