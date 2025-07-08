import express, { json } from 'express'
import jwt from 'jsonwebtoken'
import { data } from './data.js';


const app = express();
app.use(express.json());

let JWT_SECRET = 'my-secret-key'

let token = jwt.sign({ foo: 'bar' }, JWT_SECRET)
console.log(token);

app.post('/login', (req, res) => {
    console.log(req.body);

    //i was to verfy but it is the opposite
    let { name, pass } = req.body;

    res.send(
        token
    ).status(200);

    //  let decoded =jwt.verify(token,'shhhh');

    // console.log(decoded);

    
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})
/*
NOTE: it is tricky to understand headers for a person who is starting
the way 


 */