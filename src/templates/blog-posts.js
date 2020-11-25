import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"
import styled from "styled-components"
require(`katex/dist/katex.min.css`)

const StyledDiscussionEmbed = styled(DiscussionEmbed)`
  border: 1px solid black;
  border-radius: 8px;
  padding: 0rem 0.5rem 0rem 0.5rem;

  iframe {
    margin-bottom: 0px;
  }

  .footer {
    color: red;
  }
`

const StyledH2 = styled.h2`
  margin-top: 4rem;
  border-top: 1px solid black;
`

export default ({ data }) => {
  const post = data.markdownRemark

  const disqusConfig = {
    shortname: "andrewdoumont",
    config: {
      identifier: post.frontmatter.title,
      title: post.frontmatter.title,
    },
  }

  // const myExtScript = require("../scripts/blogPostScript")

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <StyledH2>Comments</StyledH2>
      <StyledDiscussionEmbed {...disqusConfig} />
      <div>Get in touch with the author at andrew.doumont@gmail.com</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
