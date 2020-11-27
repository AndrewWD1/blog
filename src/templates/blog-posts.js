import React from "react"
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
`

const OtherArticles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  a {
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
  .otherarticles-left {
  }
  .otherarticles-right {
  }
`

const StyledH2 = styled.h2`
  border-top: 1px solid black;
`

export default ({ pageContext }) => {
  const post = pageContext

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
      <OtherArticles>
        {post.previous && (
          <a className="otherarticles-left" href={post.previous.fields.slug}>
            &#8592;
            {` ${post.previous.frontmatter.title}`}
          </a>
        )}
        <div></div>
        {post.next && (
          <a className="otherarticles-right" href={post.next.fields.slug}>
            {`${post.next.frontmatter.title} `}
            &#8594;
          </a>
        )}
      </OtherArticles>
      <StyledH2>Comments</StyledH2>
      <StyledDiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}
