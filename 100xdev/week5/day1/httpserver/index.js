const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
    requestCount+=1;
    // req.name="affan"
    console.log("Total number of requests =" + requestCount)
    if (true) {
        res.send("stopped earlier")
    }
    next()
}

function realSumHandler(req, res) {
    console.log("main control reached")
    //mainlogic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    // console.log(req.name)
    res.json({
        answer: a+b
    })
}


app.get("/admin", realSumHandler)

//specifies global middleware
app.use(requestIncreaser)
app.get("/add", realSumHandler);


app.listen(3000);