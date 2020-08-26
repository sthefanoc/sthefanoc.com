import React from "react";
import { graphql, withPrefix } from 'gatsby';
import { Component } from "react";


class ImageLayout extends Component {
  
  render() {
    const { data } = this.props;
    console.log('image component',data);
    
  return (
    <>
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </>
  )}
};


export default ImageLayout;

// export const query = graphql`
//   query($wordpress_id: Int!){
//     allWordpressWpMedia(filter: {wordpress_id: {eq: $wordpress_id}}){
//       edges{
//         node{
//           localFile{
//             name
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//   query{
//     allWordpressWpMedia{
//       edges{
//         node{
//           localFile{
//             name
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
// {
//   allWordpressWpProjectItem {
//     edges {
//       node {
//         title
//         short_name
//         content
//         programming_category
//         technologies_used
//         blog_post
//         github_repo
//         live_project
//         portfolio_item_image
//         detailed_item_image
//         image_name
//         detailed_image_name
//         is_priority_portfolio_item
//       }
//     }
//   }
// }
// `