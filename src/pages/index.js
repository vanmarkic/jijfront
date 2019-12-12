import React from "react"
import { Link, graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allWordpressPost.edges.map(document => (
        <li key={document.node.slug}>
          <h2>
            <Link to={`/${document.node.slug}`}>
            <div dangerouslySetInnerHTML={{__html: document.node.title}} /></Link>
          </h2>
          <h5>{document.node.date}</h5>


          <div dangerouslySetInnerHTML={{__html: document.node.excerpt}} />
            

          
        </li>
      ))}
    </ul>
    <Link to='/page-2/'>Go to page 2</Link>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  allWordpressPost {
    edges {
      node {
        link
        slug
        type
        title
        wpml_translations {
          locale
          wordpress_id
          post_title
          href
        }
        excerpt
        content
        date
      }
    }
  }
}
`
