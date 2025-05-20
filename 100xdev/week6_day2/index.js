const express = require('express');
const jwt = require('jsonwebtoken');
JWT_SECRET='randonjwt'

const app = express();

app.use(express.json())

const users = [];


function logger(req, res, next) {
    console.log(req.method + "request");
    next();
}

app.use(logger);


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you have signed up"
    })

})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((u) => {return(u.username===username && u.password===password)});

    if (foundUser) {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET)
        res.json({
            token: token,
        })
    } else {
        res.status(403).send({
            message: "username or password is invalid"
        })
    }
})

function authenticate(req, res, next) {
    token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username
        next()
    } else {
        res.json({
            message: "unauthorized"
        })
    }
}


app.get('/get-password', authenticate, function(req, res) {
    if (req.username) {
        const foundUser = users.find((u) => {return(u.username===req.username)});

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
})

app.listen(3000);