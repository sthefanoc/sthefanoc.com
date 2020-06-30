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
        this.defineSkinColor();
        setTimeout(this.defineSkinColor,100);
    }

    defineSkinColor = () => {
        this.setState({ skinColor: window.localStorage.getItem("selectedBodySkinColor") || 'blue' });
        const links = document.querySelectorAll('.alternate-style');
  
        for(let i=0;i<links.length;i++){
          if(this.state.skinColor === links[i].getAttribute('title')){
              links[i].disabled=false;
            //   console.log(links[i].title, 'not disabled');
          } else {
            links[i].disabled=true;
            //   console.log(links[i].title, 'disabled');
          }
        }
    }

    render(){
        const {title, description, keywords, image} = this.props;

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

                        {/* <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title={this.state.skinColor} 
                            href={withPrefix(`styles/${this.state.skinColor}.css`)} 
                            type="text/css" 
                        /> */}
                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title='pink' 
                            href={withPrefix(`styles/pink.css`)} 
                            type="text/css"
                            disabled={(this.state.skinColor === 'pink') ? false : true } 
                        />
                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title='blue' 
                            href={withPrefix(`styles/blue.css`)} 
                            type="text/css" 
                            disabled={(this.state.skinColor === 'blue') ? false : true } 
                        />
                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title='orange' 
                            href={withPrefix(`styles/orange.css`)} 
                            type="text/css" 
                            disabled={(this.state.skinColor === 'orange') ? false : true } 
                        />
                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title='yellow' 
                            href={withPrefix(`styles/yellow.css`)} 
                            type="text/css" 
                            disabled={(this.state.skinColor === 'yellow') ? false : true } 
                        />
                        <link 
                            rel="stylesheet" 
                            className="alternate-style" 
                            title='green' 
                            href={withPrefix(`styles/green.css`)} 
                            type="text/css" 
                            disabled={(this.state.skinColor === 'green') ? false : true } 
                        />
                        
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