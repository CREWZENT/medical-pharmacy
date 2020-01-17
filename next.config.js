const withPurgeCss = require('next-purgecss')

module.exports = withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer // Only enable PurgeCSS for client-side production builds
})
