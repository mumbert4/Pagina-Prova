const express = require('express');
const { dirname } = require('path');
const app = express();//app ve a ser el servidor
const path= require('path');//serveix per solucionar problemes de windows i linux, tema barres '/', '\'
// settings
app.set('port',3000);

//middlewares


//routes
app.get('/',(req,res)=>{
    //res.sendFile(__dirname+'/views/index.html');
    res.sendFile(path.join(__dirname, '/views/index.html'));//per solucionar lo des directoris 
    //console.log(__dirname + 'views/index.html');
});


//static files(aixo ve a ser front end(html, css, imatges, etc))

//posam servidor al port 4000
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});

