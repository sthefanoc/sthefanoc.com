import React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import innertext from 'innertext';

const BlogPostLayout = ({data}) => {
    const post = data.wordpressPost;
    return (
        <div>
            <SEO 
                title={innertext(post.title)}
                description={innertext(post.excerpt)}
                image={post.featured_media ? post.featured_media.source_url : ''}
                keywords={post.categories.map(res => res.name).join(', ')}
                />
            <Header />
            <main>
                <div className="container">
                    <div className="row justify-content-md center">
                        <h1 dangerouslySetInnerHTML={{__html:post.title}}></h1>
                        <div dangerouslySetInnerHTML={{__html: post.content}} />
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
};

export default BlogPostLayout;

export const query = graphql`
    query($slug: String!){
        wordpressPost( slug: { eq: $slug }) {
            content
            excerpt
            title
            featured_media {
                source_url
            }
            categories {
                name
            }
        }
    }
`

  