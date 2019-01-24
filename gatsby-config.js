module.exports = {
  siteMetadata: {
    title: `aofleejay`,
    author: `Kunapot Pairat`,
    description: `My personal blog.`,
    siteUrl: 'https://overreacted.io',
    social: {
      medium: '@aofleejay',
      github: '@aofleejay',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
