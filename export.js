import file from 'node:fs'

file.writeFile('demo.txt','hello node', 
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('file created sucessfully');
        }
    }
);

file.readFile('demo.txt','utf8', 
    (err,data) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    }
);

file.appendFile('demo.txt','\n Welcome to nodejs ', 
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('file added sucessfully');
        }
    }
);

file.rename('demo.txt','DEMO.txt ', 
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('file renamed sucessfully');
        }
    }
);