import express from 'express'
const app = express()
import {authMiddleware} from './auth.js'



app.use(authMiddleware);



app.get('/', (req, res) => {
    res.send('hello world');
})



app.listen(5000, () => {
    console.log("server is running on port 5000");
});