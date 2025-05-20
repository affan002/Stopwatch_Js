const express = require('express');

const app = express()

var users= [
    {
        name: "Affan",
        kidneys: [{
                healthy: true
            }
        ]
    }
]

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberofKidneys = johnKidneys.length;
    const numberofHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy).length;
    const numberofUnHealthyKidneys =numberofKidneys-numberofHealthyKidneys;
    res.json({numberofKidneys, 
        numberofHealthyKidneys, 
        numberofUnHealthyKidneys})
})

app.use(express.json())


app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})


// 411 
app.put("/", (req,res) => {
    const numberofunHealthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy==false).length
    if (numberofunHealthyKidneys == 0) {
        res.status(411).json({
            msg: "there are no unhealthy kidneys"
        })
    } else 
    {for (let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
    }}

    res.json({})
}) 


// removing all unhealthy kidneys
app.delete("/", (req,res) => {
    // return a 411 if there is no unhealty kidney

    let atleastoneunhealty = true;
    const Totalkidneys = users[0].kidneys.length
    const new_kidneys = users[0].kidneys.filter(kidney => kidney.healthy)
    if (Totalkidneys - new_kidneys.length === 0) {
        atleastoneunhealty = false;
    }

    if (atleastoneunhealty) {
        users[0].kidneys = new_kidneys

        res.json({
            msg: "done"
        })
    } else {
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
    
})

app.listen(3000)