const express= require('express');
const app= express();

app.use(express.static('public'));
app.use('/styles',express.static('styles'));
app.set('/views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);


app.listen(3000,()=>{
    console.log('servidor corriendoen el puerto 3000');
});

app.get('/',(req,res)=>{
    res.render('TableroPrincipal.html');
});