import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import blueSkin from '../../src/styles/skins/blue.css';
import greenSkin from '../../src/styles/skins/green.css';
import orangeSkin from '../../src/styles/skins/orange.css';
import pinkSkin from '../../src/styles/skins/pink.css';
// import yellowSkin from '../../src/styles/skins/yellow.css';


const SEO = ({title, description, keywords, image}) => {
    return (
        <StaticQuery
            query={query}
            render={({
                site: {
                    siteMetadata: {
                        defaultTitle,
                        defaultDescription,
                        defaultImage,
                        url,
                        defaultKeywords
                    }
                }
            }) => {
                const seo = {
                    title: title || defaultTitle,
                    description: description || defaultDescription,
                    image: `${image ? image : url+defaultImage}`,
                    keywords: keywords || defaultKeywords
                }
                return (
                    <Helmet>
                        <title>{seo.title}</title>
                        <meta 
                            name="description" 
                            content={seo.description} />
                        <meta 
                            name="keywords" 
                            content={seo.keywords} />
                        <meta 
                            name="image" 
                            content={seo.image} />
                        <meta 
                            name="robots" 
                            content="index,follow" />
                        <html lang="en" />

                        <link rel="stylesheet" class="alternate-style" title="blue" src={{blueSkin}} type="text/css" />
                        <link rel="stylesheet" class="alternate-style" title="green" src={{greenSkin}} type="text/css" disabled />
                        <link rel="stylesheet" class="alternate-style" title="orange" src={{orangeSkin}} type="text/css" disabled />
                        <link rel="stylesheet" class="alternate-style" title="pink" src={{pinkSkin}} type="text/css" disabled />
                        {/* <link rel="stylesheet" class="alternate-style" title="yellow" src={{yellowSkin}} type="text/css" disabled /> */}

                        {/* Live style switcher end */}

                        {/* JS Template
                        {/* <script src={withPrefix('script.js')} type="text/javascript"></script> */}
                        {/* JS StyleSwitcher */}
                        {/* <script src={withPrefix('styleSwitcher.js')} type="text/javascript"></script> */} */}
                    </Helmet>
                )
            }}
        />
    )
}
export default SEO;

const query =graphql`
{
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
        defaultKeywords: keywords
        
      }
    }
  }
`