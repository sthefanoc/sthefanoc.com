import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Component } from 'react';


// const SEO = ({title, description, keywords, image}) => {
class SEO extends Component{
    constructor(props) {
        super(props)
        this.state = {
          skinColor: 'blue', // or your default width here
        }
    }

    componentDidMount (){
        this.defineSkinColor()
    //     if(window){
    //         if(localStorage.getItem("selectedBodySkinColor")){
    //             console.log(localStorage.getItem("selectedBodySkinColor"), 'is the color on localstorage');
    //             this.selectedSkinColor = localStorage.getItem("selectedBodySkinColor");
    //         } else {
    //             console.log("The used color will be the default", this.selectedSkinColor);
    //         }
    //     }
    // }
    }

    defineSkinColor = () => {
        this.setState({ skinColor: window.localStorage.getItem("selectedBodySkinColor") || 'blue' })
    }

    render(){
        const {title, description, keywords, image} = this.props;

        // if(window){
        //         if(localStorage.getItem("selectedBodySkinColor")){
        //             console.log(localStorage.getItem("selectedBodySkinColor"), 'is the color on localstorage');
        //             this.selectedSkinColor = localStorage.getItem("selectedBodySkinColor");
        //         } else {
        //             console.log("The used color will be the default", this.selectedSkinColor);
        //         }
        //     }

        
        // console.log(window);
        // this.defineSkinColor = () => {
        //     let selected = this.finalColorSelection;
        //     console.log("the defined color is going to be", selected)
        //     return selected;
        // }
        
        // this.selectedSkinColor = this.defineSkinColor();
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
                            title={this.state.skinColor} 
                            href={withPrefix(`styles/${this.state.skinColor}.css`)} 
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