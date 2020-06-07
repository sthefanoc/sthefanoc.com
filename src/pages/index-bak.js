import React from "react";
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';

export default function Home({data}) {
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        Boolean(node.featured_media)
        ? 
        (<Post
        image={node.featured_media.source_url}
        alt={node.featured_media.slug}
        title={node.title}
        excerpt={node.excerpt}
        readMore={node.slug}
        />)
        :
        (<Post
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
          />)
      ))}
    </PrimaryLayout>
)}

export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  }
}
` 