const postcssNext = require('postcss-cssnext');
const postcssPresetEnv = require('postcss-preset-env');
const siteMetadata = require('./site-meta-data');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [postcssNext, postcssPresetEnv],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.persona.fullName,
        short_name: `@${siteMetadata.persona.handle}`,
        description: siteMetadata.description,

        display: 'standalone',
        background_color: siteMetadata.appTheme.backgroundColor,
        theme_color: siteMetadata.appTheme.mainColor,

        start_url: './?utm_source=app_manifest',
        lang: `en-In`,
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/img/m-icon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: '/img/m-icon/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/img/m-icon/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/img/m-icon/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/img/m-icon/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/img/m-icon/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },
  ],
  pathPrefix: `gh-pages-playground`,
};
