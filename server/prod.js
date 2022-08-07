// https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js
const express = require('express');
const path = require('path');
const next = require('next');
const proxyMiddleware = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 80;
const app = next({ dev: false });
const handle = app.getRequestHandler();

/**
 * Types:
 * - filter : https://github.com/chimurai/http-proxy-middleware/blob/master/src/types.ts#L21
 * - options : https://github.com/chimurai/http-proxy-middleware/blob/master/src/types.ts#L23
 */
const proxies = [
  //  some cluster-external proxy
  // {
  //   filter: '/api',
  //   options: {
  //     target: process.env.CLUSTER_HOST,
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
      console.log(`> Ready on port:${port}`);
    })
    .on('error', (err) => {
      throw err;
    });
});
