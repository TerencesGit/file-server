const http = require('http');
const path = require('path');
const chalk = require('chalk');

const hostname = '127.0.0.1';
const port = '3000';
const root = process.cwd();

const route = require('./helper/route.js');

const server = http.createServer((req, res) => {
    const filePath = path.join(root, req.url);
    route(req, res, filePath);
})

server.listen(port, hostname, () => {
    const url = `http://${hostname}:${port}`;
    console.info(`server running at ${chalk.green(url)}`);
})
