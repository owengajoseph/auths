import jwt from 'jsonwebtoken'

const {
    generateKeyPairSync,
} = await import('node:crypto');

const {
    publicKey,
    privateKey,
} = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret',
    },
});

console.log(privateKey);
console.log(publicKey);

const token = jwt.sign(
    { foo: 'bar' },
    { key: privateKey, passphrase: 'top secret' },
    { algorithm: 'RS512' }
);

console.log(token);
