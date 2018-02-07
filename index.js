let http = require('http');
let cookie = require('cookie');
let httpProxy = require('http-proxy');
let proxy = httpProxy.createProxyServer({});

let opts = {
  port: 8080,
  source: 'tsc_company_summary/index.shtml',
  target: {
    host:'dev.share.local',
    port: 80
  },
  headers: [{
    key:"TSC-API-KEY",
    value:"key-a1b2c3d4e5f6"
  }]
};

let server = http.createServer((req, res, next) => {
  if(req.headers.host.indexOf(opts.target.host) > -1){
    proxy.web(req, res, { target: `http://${opts.target.host}:${opts.target.port}` });
    proxy.on('error', (e) => {
      console.log(e);
    });
    if(req.url.indexOf(opts.source) > -1){
      res.oldWriteHead = res.writeHead;

      res.writeHead = (statusCode, headers) => {
        opts.headers.forEach((header) => {
          res.setHeader(header.key, header.value);
          res.setHeader('Set-Cookie', cookie.serialize(header.key, String(header.value), {
            httpOnly: true,
            maxAge: 60 * 15
          }));
        })
        res.oldWriteHead(statusCode, headers);
      }
    }
  }
});

console.log(`listening on port ${opts.port}`)
server.listen(opts.port);
