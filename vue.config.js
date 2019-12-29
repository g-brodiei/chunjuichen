module.exports = {
  publicPaths: process.env.NODE_ENV === 'production'
    ? '/chunjuichen/'
    : '/'
}