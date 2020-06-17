import React from "react";
import { graphql, withPrefix } from 'gatsby';
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
                image={post.featured_media ? post.featured_media.localFile.childImageSharp.fixed.src: ''}
                keywords={post.categories.map(res => res.name).join(', ')}
                />
            <Header />

            <main>
                <section className="blog-post section" id="blog-post">
                    {Boolean(post.featured_media)
                        ? 
                        (<BlogPost
                            image={post.featured_media.localFile.childImageSharp.fixed.src}
                            alt={post.featured_media.localFile.childImageSharp.fixed.originalName}
                            title={post.title}
                            date={post.date}
                            slug={post.slug}
                            excerpt={post.excerpt}
                            keywords={post.categories.map(res => res.name).join(', ')}
                            categories={post.categories.map(res => res.slug).join(', ')}
                            content={post.content}
                            morePosts={filteredRelatedPosts}
                        />)
                        :
                        (<BlogPost
                            image={withPrefix('images/another-blog-post-sthefanoc.png')}
                            title={post.title}
                            date={post.date}
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
// .featured_media.localFile.childImageSharp.fixed.src

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
                localFile{
                  childImageSharp{
                    fixed{
                      src
                      width
                      height
                      originalName
                    }
                  }
                }
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
                localFile{
                  childImageSharp{
                    fixed{
                      src
                      width
                      height
                      originalName
                    }
                  }
                }
              }
              categories {
                name
                slug
              }
            }
          }
    }
`

  