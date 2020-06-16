/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

// const siteMetadata = require('./config/metadata');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "SthefanoC | Dev & Growth",
    description:"Sthefano Carvalho website. Product Developer and Growth. Focused on creating valuable solutions to society.",
    keywords:"sthefano, sthefanoc, development, fullstack, growth, growth marketing, react, react developer",
    image:"/static/sthefanoc.png",
    url:'https://sthefanoc.com/',
    social: [
        {
            name: 'github',
            url: 'https://github.com/sthefanoc'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/sthefanocarvalho/'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/sthefanocarvalho/'
        },
        {
            name: 'youtube',
            url: 'https://www.youtube.com/channel/UCgVtIe1_Uhw936xaRcrZGFg'
        }
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://www.sthefanoc.com`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`700`],
          },
          {
            family: `Roboto`,
            variants: [`300`,`400`,`500`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-169694089-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "sthefanoc.com",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
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