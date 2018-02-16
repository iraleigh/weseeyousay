const https = require('https')
const querystring = require('querystring');

module.exports = (code, onDone, onErr) => {
  const body = {
    client_id: process.env.INSTAGRAM_CLIENT_ID || '',
    client_secret: process.env.INSTAGRAM_CLIENT_SECRET || '',
    grant_type: 'authorization_code',
    redirect_uri: process.env.INSTAGRAM_REDIRECT_URI || '',
    code: code
  }

  const postData = querystring.stringify(body)
  
  const options = {
    hostname: 'api.instagram.com',
    port: 443,
    path: '/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  let req = https.request(options, (resp) => {
    let data = '';
 
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
 
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const json = JSON.parse(data);
      onDone(json)
    });
 
  }).on("error", (err) => {
    onErr ? onErr() : console.log("Error: " + err.message);
  })

  req.write(postData)
  req.end()
}