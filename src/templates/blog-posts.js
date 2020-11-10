import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"
require(`katex/dist/katex.min.css`)

export default ({ data }) => {
  const post = data.markdownRemark

  const disqusConfig = {
    shortname: "andrewdoumont",
    config: {
      identifier: post.frontmatter.title,
      title: post.frontmatter.title,
    },
  }

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <h2>Comments</h2>
      <DiscussionEmbed
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "0.5rem 1rem 0rem 1rem",
        }}
        {...disqusConfig}
      />
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
