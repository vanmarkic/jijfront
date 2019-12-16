import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const PageTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} description={data.wordpressPage.excerpt} />
    <h1 dangerouslySetInnerHTML={{ __html:data.wordpressPage.title}} />
    {/* <Img sizes={data.wordpressPage.acf.feat_img.localFile.childImageSharp.sizes} alt={data.wordpressPage.title} style={{ maxHeight: 450 }} /> */}
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
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