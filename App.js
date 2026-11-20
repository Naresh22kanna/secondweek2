const exp= require('express');
const app = exp();

app.listen(3000);

app.get('/home',(req,res)=>{
  //  res.send(' <h2>This is express Js </h2>')

  res.sendFile('./docs/home.html',{root: __dirname});
})

app.get('/index',(req,res)=>{
    res.sendFile('./docs/index.html',{root: __dirname});
})

app.get('/ind',(res,req)=>{
    res.redirect('/indx');
})

app.use('/'|| '',(req,res)=>{
    res.sendFile('./docs/error.html',{root: __dirname});
})