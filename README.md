# reversedns
reversedns example using apigee as an api for requesting IP

## The code
All the code is found under:
 * `apiproxy/resources/hosted/index.js`

And NOTE: you can run this on your own local machine but you'll need to make sure you `npm i` before doing so.

## How to use
Once deployed you can run something like the following to have the ip spit back the reverse dns
lookup of your requesting ip.
```bash
curl https://emea-poc15-test.apigee.net/reversedns
```

And the output will look like so:
```javascript
{
  "clientIP": "178.78.252.145",
    "reverseNames": [
        "178-78-252-145.customers.ownit.se"
          
    ]
    
}
```

If you try and run this locally you'll need to change your curl to send an ip client header like the following:
```bash
  curl http://localhost:3000 -H "X-CLIENT-IP: 8.8.8.8"
```

In this case I fudged the requesting ip address header and the result will look like this:
```javascript
{
  "clientIP": "8.8.8.8",
    "reverseNames": [
        "dns.google"
          
    ]
    
}
```
