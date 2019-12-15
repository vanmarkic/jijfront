import React from "react"
import { Link, graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"
import { Global, css } from '@emotion/core';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <ul>
      {data.allWordpressPost.edges.map(document => (
        <li key={document.node.slug}>
          <h2>
            <Link to={`/post/${document.node.slug}`}>
            <div dangerouslySetInnerHTML={{__html: document.node.title}} /></Link>
          </h2>
          <h5>{document.node.date}</h5>


          <div dangerouslySetInnerHTML={{__html: document.node.excerpt}} />
            

          
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  allWordpressPost(limit: 3) {
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
        date(formatString : "DD/MM/YYYY")
      }
    }
  }
}
`
