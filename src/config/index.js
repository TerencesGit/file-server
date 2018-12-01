module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: '3000',
    compress: /\.(html|css|js|json)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}