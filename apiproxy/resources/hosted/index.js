const express = require('express');
const dns = require('dns');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('the headers are: %j', req.headers);
  let ip = req.headers['x-client-ip'];
  console.log('the ip is: %s', ip);
  dns.reverse(ip, (e,h) => {
    if (e) {
      throw e;
    }
    res.json({"clientIP": `${ip}`, "reverseNames": h});
  });
});

app.listen(port, () => {
  console.log("And we're starting up");
  console.log(`Example app listening at http://localhost:${port}`);
});
