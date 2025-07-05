function authMiddleware(req, res, next) {
    console.log('does this even run bro');

    if (req.headers.authorization === undefined) {

        res.set('WWW-Authenticate', 'Basic realm="user_pages"');
        res.status(401).send('Authentication required.');


    }

    console.log(req.headers.authorization);
    let data = req.headers.authorization;


    const base64Credentials = data.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    let [username, password] = credentials.split(":");
    console.log(`${username}and ${password}`);
    console.log(credentials);

    // Verify the credentials
    if (username === 'admin' && password === 'admin') {
        return next();
    }

    //NOTE:did not work with chrome and i dont know why

    // // Respond with authenticate header on auth failure.
    // res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    // res.status(401).send('Authentication required.');
};


export { authMiddleware }