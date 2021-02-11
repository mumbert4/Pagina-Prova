const express = require('express');
//const  dirname  = require('path');
const app = express();//app ve a ser el servidor
const path= require('path');//serveix per solucionar problemes de windows i linux, tema barres '/', '\'
// settings
app.set('port',3000);
app.set('view engine','ejs');//ejs no fa falta improtar-lo, express el sol dur integrat
app.set('views',__dirname + '/views');
app.engine('html',require('ejs').renderFile);//procesarem els archius html com archius ejs, seguira tot igual


//middlewares


//routes
const router=require('./routes/index.js');
app.use(router);
//app.use(require('./routes/index.js') es lo mateix


//static files(aixo ve a ser front end(html, css, imatges, etc))
app.use(express.static(path.join(__dirname, 'public/css')));


//posam servidor al port 4000
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});

