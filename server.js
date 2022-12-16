const express = require('express');
const app = express();



// Middleware
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());

app.get('/logs', (req, res)=>{
    res.send('Welcome to Captains_logs');
})
// NEW ROUTE
app.get('/logs/new', (req, res)=>{
    res.render('New');
})












app.listen(3000, ()=>{
    console.log('listening');
})