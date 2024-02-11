const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  
  app.use(
    '/v2/users/uslegalization@gmail.com/meetings',
    createProxyMiddleware({
      target: 'https://zoom.us',
      changeOrigin: true,
    })
  );
  app.use(
    '/oauth/token',
    createProxyMiddleware({
      target: 'https://zoom.us',
      changeOrigin: true,
    })
  );
};