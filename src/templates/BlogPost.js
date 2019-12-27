import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {colors} from '../theme'
import { css } from "@emotion/core"


const BlogPostTemplate = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.title} />
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} css={css`
          color: ${colors.red};
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          line-height: 1.4;
        `}/>
    <p>
        {pageContext.date}
    </p>
    {/* <Img sizes={pageContext.acf.feat_img.localFile.childImageSharp.sizes} alt={pageContext.title} style={{ maxHeight: 450 }} /> */}
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
export default BlogPostTemplate
// export const query = graphql`
//   query($id: Int!) {
//     wordpressPost(wordpress_id: { eq: $id }) {
//       title
//       content
//       excerpt
//       date(formatString: "D MMMM YYYY")
//       author {
//         name
//       }
//       wordpress_id
//     }
//   }
// `