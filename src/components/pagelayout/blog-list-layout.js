import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layout"
import SEO from "../seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  color: #0f4d7a;
  margin-bottom: 0px;
  padding-bottom: 0px;
`

const BlogDate = styled.div`
  margin: 0px;
  font-size: 0.8rem;
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

const OtherPages = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #0f4d7a;
  }
`

export default ({ data, currentPage, numPages }) => {
  if (!numPages) numPages = 2
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Blog Entries</h1>
        {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title}</BlogTitle>
            </BlogLink>
            <BlogDate>{node.frontmatter.date}</BlogDate>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <OtherPages>
        {currentPage !== 1 && <a href={`/${currentPage - 1}`}>Previous Page</a>}
        <div></div>
        {numPages > currentPage ? (
          <a href={`/${currentPage + 1}`}>Next Page &#8594;</a>
        ) : null}
      </OtherPages>
      Visit my homepage at{" "}
      <A href="https://andrewdoumont.com">https://andrewdoumont.com</A>
    </Layout>
  )
}
