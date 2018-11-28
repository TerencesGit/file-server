const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

module.exports = async function(req, res, filePath) {
    try {
        const stats = await stat(filePath);
        if(stats.isFile()) {
            res.setStatusCode = 200;
            res.setHeader('ContentType', 'text/plain');
            fs.createReadStream(filePath).pipe(res);
        } else if(stats.isDirectory()) {
            const files = await readdir(filePath);
            res.setStatusCode = 200;
            res.setHeader('ContentType', 'text/plain');
            res.end(files.join(', '));
        }
    } catch(ex) {
        console.error(ex);
        res.setStatusCode = 404;
        res.setHeader('ContentType', 'text/plain');
        res.end(`${filePath} is not a directory or file`);
    }
}