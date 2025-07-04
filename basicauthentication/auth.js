
function decodeCredentials(authHeader) {
    //if it does not console log it will be hard for me to understand.
    // Convert a Base64 string back to the original string
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');

    console.log('Base64 Decoded:', credentials);

    return [];
}



function authMiddleware(req, res, next) {
    console.log('does this even run bro');
    console.log(req.username)
    console.log(req.headers.authorization);
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