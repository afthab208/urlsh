const express = require('express');
const app = express();
const port =3000;
const path = require('path');
const { nanoid } = require('nanoid');



const urls ={};
app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));

app.post('/sh',(req,res)=> {
    const url = req.body.url;
    const id = nanoid(5);
    urls[id]=url;

    res.send(`<p>Short URL: <a href="/${id}" target="_blank">http://localhost:${port}/${id}</a></p>`)
})
app.get('/:id', (req,res)=>{
    const url= urls[req.params.id];
    if(url){
        res.redirect(url);
    }else {
        res.send(`<h3>Request url not found :( </h3>`)
    }
})
app.listen(port, ()=> {
    console.log(`app listening at port  ${port}`)
}) 