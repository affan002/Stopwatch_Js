const express = require('express');

const app = express()

function loggerMiddleware(req, res, next) {
    console.log('The method is '+ req.method)
    console.log('The url is ' + req.url)
    console.log('The host is ' + req.headers.host)
    console.log(new Date())
    next()
}

app.get('/sum', loggerMiddleware, (req,res)=>{
    console.log("done")
})

app.listen(3000)