const path = require('path');

const mimeTypes = {
    'txt': 'text/plain',
    'html': 'text/html',
    'css': 'text/css',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'mpeg': 'audio/mpeg',
    'ogg': 'audio/ogg',
    'audio': 'audio/*',
    'mp4': 'video/mp4',
    'json': 'application/json',
    'js': 'application/javascript',
    'javascript': 'application/javascript',
    'ecmascript': 'application/ecmascript',
    'octet-stream': 'application/octet-stream'
}

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if(!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
}