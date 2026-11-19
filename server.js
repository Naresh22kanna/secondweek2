const http = require ("http");
const fs= require ('fs');

const server = http.createServer((req,res)=>{
    /* console.log("Request Made");
    console.log(req.url);
    console.log(req.method); */

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./docs/index.html',(err,data)=>{
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