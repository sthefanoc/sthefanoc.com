import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import ColorStyles from '../components/ColorStyles';
import { Helmet } from 'react-helmet';


const SEO = ({title, description, keywords, image}) => {
    const links = document.querySelectorAll('.alternate-style');
    const totalLinks=links.length;
    let selectedSkinColor = 'blue';

    if(localStorage.getItem("selectedBodySkinColor")){
        console.log(localStorage.getItem("selectedBodySkinColor"), 'is the color on localstorage');
        selectedSkinColor = localStorage.getItem("selectedBodySkinColor");
    } else {
        console.log("The used color will be the default", selectedSkinColor);
    }

    // for(let i=0;i<totalLinks;i++){
    //   if(localStorage.getItem("selectedBodySkinColor") === links[i].getAttribute('title')){
    //       links[i].removeAttribute("disabled");
    //       console.log(links[i].title, 'not disabled');
    //   } else {
    //       links[i].setAttribute("disabled","true");
    //       console.log(links[i].title, 'disabled');
    //   }
    // };

    
    
    
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

                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title={selectedSkinColor} 
                            href={withPrefix(`styles/${selectedSkinColor}.css`)} 
                            type="text/css" 
                        />
                        {/* <ColorStyles /> */}

                        {/* <link rel="stylesheet" className="alternate-style" title="green" href={withPrefix('styles/green.css')} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="pink" href={withPrefix('styles/pink.css')} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="blue" href={withPrefix('styles/blue.css')} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="yellow" href={withPrefix('styles/yellow.css')} type="text/css" disabled />
                        <link rel="stylesheet" className="alternate-style" title="orange" href={withPrefix('styles/orange.css')} type="text/css" disabled /> */}
                        
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