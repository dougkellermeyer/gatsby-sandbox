import React from 'react'
import {Link} from 'gatsby'

const Template = ({data}) => {
    const post = data.markdownRemark
    return (
        <div>
            <Link to="/blog">Go back</Link>
            <hr/>
            {/* don't need the node in path because were dealing with single node */}
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    )
}

export const postQuery = graphql `
    query BlogPostByPath ($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

export default Template 