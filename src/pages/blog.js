import React from "react";
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';

export default function Home({data}) {
  // async const = correctPage() {
  //   document.getElementsByClassName('blog-link')[0].setAttribute("aria-current", "page");
  // }
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
            image={node.featured_media.source_url}
            alt={node.featured_media.slug}
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