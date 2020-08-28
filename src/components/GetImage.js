import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

class CoolThing extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {this.props.site.siteMetadata.title}

        {/* conditionally render directories */}
        {this.props.allWordpressWpMedia.edges && (
          <ul>
            {this.props.allWordpressWpMedia.edges.map((image) => {
              return <li key={image.node.id}>{ image.node.name }</li>
            })}
          </ul>
        )}


        {/* {this.props.directories.edges && (
          <ul>
            {this.props.directories.edges.map((directory) => {
              return <li key={directory.node.id}>{ directory.node.name }</li>
            })}
          </ul>
        )} */}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpMedia {
            edges {
                node {
                    wordpress_id
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
            }
        }
        site {
          siteMetadata {
            title
          }
        }
        
      }
    `}
    render={(data) => (
      <CoolThing site={data.site} directories={data.allWordpressWpMedia} />
    )}
  />
)