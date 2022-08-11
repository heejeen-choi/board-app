// https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js
const express = require('express');
const path = require('path');
const next = require('next');
const proxyMiddleware = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3002;
const app = next({ dev: true });
const handle = app.getRequestHandler();

const schema = require('../src/kollection.json');
// const menu = require('../src/comp/shared/MenuProvider.ts');
/**
 * Types:
 * - filter : https://github.com/chimurai/http-proxy-middleware/blob/master/src/types.ts#L21
 * - options : https://github.com/chimurai/http-proxy-middleware/blob/master/src/types.ts#L23
 */
const proxies = [
  {
    filter: '/api/sample',
    options: {
      // target: 'http://localhost:9093', // dev server ip
      target: 'http://35.190.235.222',    // dev server ip
      changeOrigin: true,
      secure: false,
      pathRewrite: { '/api/sample': '' },
    },
  },
  // {
  //   filter: '/api',
  //   options: {
  //     target: 'http://localhost:0000', // dev server ip
  //     changeOrigin: true,
  //     secure: false,
  //   },
  // },
];



app.prepare().then(() => {
  const server = express();

  proxies.forEach((proxy) => {
    server.use(proxyMiddleware.createProxyMiddleware(proxy.filter, proxy.options));
  });

  server.all('*', (req, res) => {
    handle(req, res);
  });

  server
    .listen(port, () => {
      console.log(process.env);
      console.log(`> Ready on http://localhost:${port}`);
    })
    .on('error', (err) => {
      throw err;
    });
});
