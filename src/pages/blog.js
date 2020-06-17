import React from "react";
import { graphql, withPrefix } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';
import anotherBlogPostImage from '../../static/images/another-blog-post-sthefanoc.png';

export default function Home({data}) {
  // async const = correctPage() {
  //   document.getElementsByClassName('blog-link')[0].setAttribute("aria-current", "page");
  // }
  console.log('This is the Blog page');
  return (
    <PrimaryLayout>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h1>Latest Blog</h1>
            </div>
          </div>
          {data.allWordpressPost.nodes.map(node => (
            Boolean(node.featured_media)
            ? 
            (<Post
            image={node.featured_media.localFile.childImageSharp.fixed.src}
            alt={node.featured_media.localFile.childImageSharp.fixed.originalName}
            title={node.title}
            date={node.date}
            excerpt={node.excerpt}
            readMore={node.slug}
            keywords={node.categories.map(res => res.name)}
            categories={node.categories.map(res => res.slug)}
            key={node.slug}
            />)
            :
            (<Post
              image={anotherBlogPostImage}
              alt="Another SthefanoC.com Blog Post"
              title={node.title}
              excerpt={node.excerpt}
              date={node.date}
              readMore={node.slug}
              keywords={node.categories.map(res => res.name)}
              categories={node.categories.map(res => res.slug)}
              key={node.slug}
          />)
          ))}
        </div>
        {/* JS Template */}
        {/* <script src={withPrefix('js/script.js')} type="text/javascript"></script> */}
        {/* JS StyleSwitcher */}
        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript"></script> */}
      </section>

    </PrimaryLayout>
)}

export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      date (formatString: "MMMM DD, YYYY")
      featured_media {
        localFile{
          childImageSharp{
            fixed(width:300, height: 300){
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