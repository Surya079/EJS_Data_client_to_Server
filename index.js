import express from 'express';
// import bodyParser from 'body-parser';
// import { dirname }  from 'path';
// import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}))

app.get('/', (req, res)=>{

    res.render("index.ejs");

})

app.post("/find",(req, res)=>{
    let name = req.body["firstname"] + req.body["secondname"];
    let len = name.length;
    res.render("index.ejs",len)
    
});

app.listen(port,(req, res)=>{

    console.log(`Listening server on port : ${port}`);

})