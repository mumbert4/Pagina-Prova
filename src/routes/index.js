const express= require('express');
const router=express.Router();//router es per crear multiples rutes i tenir-les en archius separats
//rutes
router.get('/',(req,res)=>{
    //res.sendFile(__dirname+'/views/index.html');
    //res.sendFile(path.join(__dirname, '/views/index.html'));//per solucionar lo des directoris 
    res.render('index.ejs',{title: 'Primera pagina web NODE'});//li hem passat una variable anomenada title
    //console.log(__dirname + 'views/index.html');
});

router.get('/contact',(req,res)=>{
    res.render('contact.ejs',{title: 'Pagina de contactes'});
})

module.exports=router;