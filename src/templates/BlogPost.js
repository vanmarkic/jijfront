import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {colors} from '../theme'
import { css } from "@emotion/core"


const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
    <h1 dangerouslySetInnerHTML={{__html: data.wordpressPost.title}} css={css`
          color: ${colors.red};
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem calc((100vw - 900px) / 2);
        `}/>
    <p>
        {data.wordpressPost.date}
    </p>
    {/* <Img sizes={data.wordpressPost.acf.feat_img.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} style={{ maxHeight: 450 }} /> */}
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </Layout>
)
export default BlogPostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "D MMMM YYYY")
      author {
        name
      }
    }
  }
`