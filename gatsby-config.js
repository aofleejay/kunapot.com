module.exports = {
  siteMetadata: {
    title: `Just another blog.`,
    author: `aofleejay`,
    siteUrl: 'https://aofleejay.com',
    keywords: ['เล่าหนังสือ', 'เล่าเกม'],
    social: {
      medium: 'https://medium.com/@aofleejay/latest',
      github: 'https://github.com/aofleejay',
    },
    facebookAppID: '489184495212718',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-75313761-4',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aofleejay`,
        short_name: `aofleejay`,
        start_url: `/`,
        background_color: `#209CEE`,
        theme_color: `#209CEE`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: '100%',
              height: 330,
            },
          },
        ],
      },
    },
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: '@aofleejay',
        name: 'MediumFeed',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
