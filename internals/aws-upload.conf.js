const path = require('path');

const userDir = () => process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
const rootPath = path.join(userDir(), '/aws-credential-prime-reactjs.json');
// const aws = require(rootPath);
const { NODE_ENV } = process.env;
const isProd = () => NODE_ENV === 'production';

const config = {
  credentials: rootPath,
  bucketName: isProd() ? 'app.b2wadvertising.com' : 'app-staging.b2wadvertising.com',
  patterns: ['*.js', '*.css', '*.html'],
};

module.exports = config;
