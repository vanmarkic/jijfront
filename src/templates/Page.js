import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const PageTemplate = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.excerpt} />
    <h1 dangerouslySetInnerHTML={{ __html:pageContext.title}} />
    {/* <Img sizes={pageContext.acf.feat_img.localFile.childImageSharp.sizes} alt={pageContext.title} style={{ maxHeight: 450 }} /> */}
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
export default PageTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`