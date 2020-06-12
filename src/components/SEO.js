import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import Color from './Color';
// import blueSkin from '../../static/skins/blue.css';
// import blueSkin from '../../src/styles/skins/blue.css';
// import greenSkin from '../../static/skins/green.css';
// import orangeSkin from '../../src/styles/skins/orange.css';
// import pinkSkin from '../../static/skins/pink.css';
// // import yellowSkin from '../../src/styles/skins/yellow.css';

const SEO = ({title, description, keywords, image}) => {
    // const chosenSkin = blueSkin;
    
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
                        <Color />

                        {/* <link rel="stylesheet" className="alternate-style" title="" src={{chosenSkin}} type="text/css" /> */}
                        {/* <link rel="stylesheet" className="alternate-style" title="pink" src={{pinkSkin}} type="text/css" /> */}
            
                        {/* <link rel="stylesheet" className="alternate-style" title="blue" src={{blueSkin}} type="text/css" />
                        <link rel="stylesheet" className="alternate-style" title="green" src={{greenSkin}} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="orange" src={{orangeSkin}} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="pink" src={{pinkSkin}} type="text/css" disabled /> */}
                        {/* <link rel="stylesheet" className="alternate-style" title="yellow" src={{yellowSkin}} type="text/css" disabled /> */}

                        {/* Live style switcher end */}

                        {/* JS Template */}
                        <script src={withPrefix('script.js')} type="text/javascript"></script>
                        {/* JS StyleSwitcher */}
                        <script src={withPrefix('styleSwitcher.js')} type="text/javascript"></script>
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