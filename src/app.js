const http = require('http');
const path = require('path');
const chalk = require('chalk');

const route = require('./helper/route.js');
const config = require('./config/index.js');

const server = http.createServer((req, res) => {
    const filePath = path.join(config.root, req.url);
    route(req, res, filePath);
})

server.listen(config.port, config.hostname, () => {
    const url = `http://${config.hostname}:${config.port}`;
    console.info(`server running at ${chalk.green(url)}`);
})
