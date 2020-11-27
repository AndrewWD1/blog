import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #0f4d7a;
`

const A = styled.a`
  color: #0f4d7a;
  &:visited {
    color: #0f4d7a;
  }
  &:hover {
    text-decoration: underline;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Blog Entries</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      Go to my homepage at{" "}
      <A href="https://andrewdoumont.com">https://andrewdoumont.com</A>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
      totalCount
    }
  }
`
