/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'process.env.AUTH_CLIENT_ID': JSON.stringify(
          process.env.AUTH_CLIENT_ID
        ),
        'process.env.AUTH_CALLBACK_URL': JSON.stringify(
          process.env.AUTH_CALLBACK_URL
        ),
      }),
    ],
  })

  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
