'use strict'
const app = require('./app');
const http = require('http');
const fs = require('fs');
const https = require('https');

// Certificate
//const privateKey = fs.readFileSync('/home/ec2-user/ssl/private.key', 'utf8');
//const certificate = fs.readFileSync('/home/ec2-user/ssl/certificate.crt', 'utf8');
//const ca = fs.readFileSync('/home/ec2-user/ssl/ca_bundle.crt', 'utf8');

//const credentials = {
//	key: privateKey,
//	cert: certificate,
//	ca:ca
//};


// Starting both http & https servers
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});


//httpsServer.listen(443, () => {
//	console.log('HTTPS Server running on port 443');
//});
