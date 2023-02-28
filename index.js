module.exports = function ViteBaseResolver(config = { base: process.env.VITE_BASE, build: process.env.VITE_BUILD_DIRECTORY }) {
    if (process.env.NODE_ENV === 'development') {
        return ''
    }

    return `http://${config.base}/${config.build}`
}
