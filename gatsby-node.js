const { createFilePath } = require("gatsby-source-filesystem");
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark"){
        const slug = createFilePath({ node, getNode, basePath: "posts"});
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
  }
  
exports.createPages = ({graphql, actions}) => {
const { createPage } = actions;
return graphql(`
{
    allWordpressPost {
      nodes {
        slug
      }
    }
    allWordpressCategory {
      nodes {
        slug
      }
    }
  }      
`).then(result => {
        result.data.allWordpressPost.nodes.forEach((node) => {
            createPage({
                path: 'blog/' + node.slug,
                component: path.resolve('./src/layouts/BlogPostLayout.js'),
                context: {
                    slug: node.slug
                }
            })
        })
        result.data.allWordpressCategory.nodes.forEach((node) => {
            createPage({
                path: 'blog/' + node.slug,
                component: path.resolve('./src/layouts/BlogPostCategoryLayout.js'),
                context: {
                    slug: node.slug
                }
            })
        })
    })
};

// exports.createPages = ({graphql, actions}) => {
//     const { createPage } = actions;
//     const postsData = data.allWordpressPost;
//     const categoryData = data.allWordpressCategory;
//     return graphql(`
    // {
    //     allWordpressPost {
    //       nodes {
    //         slug
    //       }
    //     }
    //     allWordpressCategory {
    //       nodes {
    //         slug
    //       }
    //     }
    //   }      
//     `).then(result => {
//             result.postsData.nodes.forEach((node) => {
//                 createPage({
//                     path: 'blog/' + node.slug,
//                     component: path.resolve('./src/layouts/BlogPostLayout.js'),
//                     context: {
//                         slug: node.slug
//                     }
//                 })
//             })
//         })
//     .then(result => {
//         result.categoryData.nodes.forEach((node) => {
//             createPage({
//                 path: 'blog/' + node.slug,
//                 component: path.resolve('./src/layouts/BlogPostCategoryLayout.js'),
//                 context: {
//                     slug: node.slug
//                 }
//             })
//         })
//     })
// }