import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


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
                        {/* <Color /> */}

                        <link rel="stylesheet" className="alternate-style" title="blue" href={withPrefix('styles/blue.css')} type="text/css" disabled="true"/>
                        <link rel="stylesheet" className="alternate-style" title="pink" href={withPrefix('styles/pink.css')} type="text/css" />
                        <link rel="stylesheet" className="alternate-style" title="green" href={withPrefix('styles/green.css')} type="text/css" disabled="true"/>
                        <link rel="stylesheet" className="alternate-style" title="yellow" href={withPrefix('styles/yellow.css')} type="text/css" disabled="true"/>
                        <link rel="stylesheet" className="alternate-style" title="orange" href={withPrefix('styles/orange.css')} type="text/css" disabled="true"/>


                        {/* JS Template */}
                        {/* <script src={withPrefix('js/script.js')} type="text/javascript" id="script"></script> */}
                        {/* JS StyleSwitcher */}
                        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript" id="styleSwitcher"></script> */}
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