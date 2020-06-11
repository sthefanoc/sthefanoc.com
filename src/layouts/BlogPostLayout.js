import React from "react";
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';
import innertext from 'innertext';

const BlogPostLayout = ({data}) => {
    const post = data.wordpressPost;
    const relatedPosts = data.allWordpressPost;
    const keywords = post.categories.map(res => res.name);
    const postSlug = post.slug;
    const filteredRelatedPosts = relatedPosts.nodes.filter((item) => {
        let kws = item.categories;
        for(let i=0;i<kws.length;i++){
            console.log(kws[i].name)
            if((keywords.includes(kws[i].name)) &&
                (item.slug !== postSlug)
            ){
                return item;
            } else {

            }
        }
    });

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
                <section class="blog-post section" id="blog-post">
                    {(post.featured_media.source_url)
                        ? 
                        (<BlogPost
                            image={post.featured_media.source_url}
                            alt={post.featured_media.slug}
                            title={post.title}
                            date={post.date}
                            excerpt={post.excerpt}
                            keywords={post.categories.map(res => res.name).join(', ')}
                            categories={post.categories.map(res => res.slug).join(', ')}
                            content={post.content}
                            morePosts={filteredRelatedPosts}
                        />)
                        :
                        (<BlogPost
                            title={post.title}
                            date={post.date}
                            excerpt={post.excerpt}
                            keywords={post.categories.map(res => res.name).join(', ')}
                            categories={post.categories.map(res => res.slug).join(', ')}
                            content={post.content}
                            morePosts={filteredRelatedPosts}
                        />)
                    }
                </section>
            </main>

            {/* <main>
                <div className="container">
                    <div className="row justify-content-md center">
                        <h1 dangerouslySetInnerHTML={{__html:post.title}}></h1> 
                        <div dangerouslySetInnerHTML={{__html: post.content}} />
                    </div>
                </div>
            </main> */}
            
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
            slug
            date (formatString: "MMMM DD, YYYY")
            featured_media {
                source_url
                slug
            }
            categories {
                name
                slug
            }
        }
        allWordpressPost {
            nodes {
              slug
              title
              excerpt
              date (formatString: "MMMM DD, YYYY")
              featured_media {
                source_url
                slug
              }
              categories {
                name
                slug
              }
            }
          }
    }
`

  