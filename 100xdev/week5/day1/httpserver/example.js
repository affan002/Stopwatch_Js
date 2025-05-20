const express = require('express')
// const bodyParser = require('body-parser')

const app = express()


app.use(express.json())


app.post("/sum", function(req,res) {
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseint(req.body.b);

    res.json({
        ans: a+b
    })
})

app.listen(3000);