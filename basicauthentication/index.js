import express from 'express'
const app = express()
import { authMiddleware } from './auth.js'



app.use(authMiddleware);

// Respond with authenticate header on auth failure.

app.get('/', (req, res) => {
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.status(401).send('Authentication required.');
    res.send('hello world');
})



app.listen(5000, () => {
    console.log("server is running on port 5000");
});