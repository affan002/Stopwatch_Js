const express = require('express');
const jwt = require('jsonwebtoken');
JWT_SECRET = 'randonjwtsecret'
const app = express();

app.use(express.json())

const users = [];


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

    console.log(users);
    })

app.post('/signin', (req, res) => {
    

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {return (u.username===username && u.password ===password)});

    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET   ); //convert username to a jwt

        // user.token = token;
        res.json({
            token: token
        })

    } else {
        res.status(403).send({
            message: "username or password is invalid"
        })
    }
    
    console.log(users)
    });

app.get('/me', function(req, res) {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token,JWT_SECRET); // {username: affan}
    const username = decodedInformation.username;


    const user = users.find((u) => {return(u.username===username)})

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }
})



app.listen(3000);