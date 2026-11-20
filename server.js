const http = require ("http");
const fs= require ('fs');

const server = http.createServer((req,res)=>{
    /* console.log("Request Made");
    console.log(req.url);
    console.log(req.method); */

    let path='./docs/';

    if(req.url=='/home' || req.url=='/'){
        path+='home.html';
    }else if(req.url=='/index' ){
        path+='index.html';
    }else {
        path+='error.html';
    }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(300,'localhost', ()=>{
    console.log('server listening'); 
})