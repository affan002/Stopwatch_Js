const express = require('express'); 

const app = express() 

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age>=14) {
        next();
    } else {
        res.json({
            msg:"sorry you are not of age"
        })
    }
}


app.get('/ride2', isOldEnoughMiddleware, function(req, res){
    res.json({
        msg:"you have successfully ridden the ride"
    })
})



app.listen(3000)