import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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