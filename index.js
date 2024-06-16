import express from 'express';
import { dirname }  from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.render("index.ejs");
})

app.listen(port,(req, res)=>{
    console.log(`Listening server on port : ${port}`);
})