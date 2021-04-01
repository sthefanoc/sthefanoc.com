/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
const languages = require("./src/data/languages")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const siteMetadata = require('./config/metadata');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "SthefanoC | Dev & Growth",
    languages,
    description:
      "Sthefano Carvalho website. Product Developer and Growth. Focused on creating valuable solutions to society.",
    keywords:
      "sthefano, sthefanoc, development, fullstack, growth, growth marketing, react, react developer",
    image: "/static/sthefanoc.png",
    url: "https://sthefanoc.com/",
    author: "SthefanoC",
    social: [
      {
        name: "github",
        url: "https://github.com/sthefanoc",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sthefanocarvalho/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/sthefanocarvalho/",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCgVtIe1_Uhw936xaRcrZGFg",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-169694089-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-169694089-1",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `http://wordpress.sthefanoc.com/`,
        uploadsUrl: `http://wordpress.sthefanoc.com/wp-content/uploads/`,
        processPostTypes: [
          "Page",
          "Post",
          "Certificates",
          "Portfolio Items",
          "Projects",
        ],
        graphqlTypeName: "WPGraphQL",
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `sthefanoc`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.sthefanoc.com`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family: "Rubik",
              variants: ["700"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
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
    // {
    //   resolve: `gatsby-source-wordpress-experimental`,
    //   options: {
    //     /*
    //      * The full URL of the WordPress site's GraphQL API.
    //      * Example : 'https://www.example-site.com/graphql'
    //      */
    //     url: `https://wordpress.sthefanoc.com/graphql`,
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wordpress.sthefanoc.com`,
        protocol: `http`,
        plugins: [
          {
            resolve: `@draftbox-co/gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `wordpress.sthefanoc.com`,
              protocol: `http`,
            },
          },
        ],
        hostingWPCOM: false,
        withWebp: true,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/portfolio_item",
          "**/certificate_item",
          "**/project_item",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
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
    `gatsby-plugin-offline`,
  ],
}

{
  /* <Helmet>
  <title>Fun Gatsby Wordpress</title>
  <meta name="description" content="!" />
  <meta name="keywords" content="gatsby, awesome, eay" />
  <meta name="robots" content="index,follow" />
</Helmet> */
}

// {
//   resolve: 'gatsby-plugin-load-script',
//   options: {
//     src: '/script.js', // Change to the script filename
//   },
// },
