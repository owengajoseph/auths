const { base64 } = 'base-64'
// import utf8 from utf8


function decodeCredentials(authHeader) {
    //if it does not console log it will be hard for me to understand.
    console.log(authHeader);
    console.log(base64.decode(authHeader.Basic));
    return [];
}



function authMiddleware(req, res, next) {
    console.log('does this even run bro');
    console.log(req.body);
    // Take the header and decode credentials
    const [username, password] = decodeCredentials(
        req.headers.authorization || ''
    );

    // Verify the credentials
    if (username === 'admin' && password === 'admin') {
        return next();
    }

    // Respond with authenticate header on auth failure.
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.status(401).send('Authentication required.');
};


export { authMiddleware }