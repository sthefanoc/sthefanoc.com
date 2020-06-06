/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "New Try with Helmet",
    description:"This is an awesome description. And we're going to see more!",
    keywords:"gatsby, great, eay, awesome",
    image:"/static/gatsby.jpg",
    url:'http://sthefanoc.com/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wordpress.sthefanoc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby bootstrap wordpress`,
        short_name: `GatsWordpress`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
}

{/* <Helmet>
  <title>Fun Gatsby Wordpress</title>
  <meta name="description" content="!" />
  <meta name="keywords" content="gatsby, awesome, eay" />
  <meta name="robots" content="index,follow" />
</Helmet> */}