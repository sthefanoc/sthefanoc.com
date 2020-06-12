/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "SthefanoC | Dev & Growth",
    description:"Sthefano Carvalho website. Product Developer and Growth. Focused on creating valuable solutions to society.",
    keywords:"sthefano, sthefanoc, development, fullstack, growth, growth marketing, react, react developer",
    image:"/static/sthefanoc.png",
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
        name: `SthefanoC | Product Development & Growth`,
        short_name: `SthefanoC`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/sthefanoc-icon.png`,
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

// {
//   resolve: 'gatsby-plugin-load-script',
//   options: {
//     src: '/script.js', // Change to the script filename
//   },
// },