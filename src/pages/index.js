import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card.js"
import {colors} from '../../src/theme'
import {css} from '@emotion/core'

// const StyledCard = styled(ArticleCard)`
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//   color: ${colors.ciel};
//   font-size: 1rem;
//   font-family : 'Cubano-Regular', 'Arial', 'Helvetica';
//   font-weight: ${props => props.fontWeight || "normal"};
//   line-height: 1;
//   margin: auto 0.5rem auto 0;
//   padding: 0.25rem;
//   text-decoration: none;
//   &.current-page {
//     border-bottom: 2px solid ${colors.yellorange};
//   }
//   &:last-of-type {
//     margin-right: 0;
//   }
// `

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <div>
      {data.allWordpressPost.edges.map((document,index) => (
       <ArticleCard post={document.node} key={index} />
      ))}
    </div>
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

