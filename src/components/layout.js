/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core';

import Header from "./header"
import "./layout.css"
import {colors} from "../theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            background-color : ${colors.white};
            margin: 0;
            color: #555;
            font-family: Roboto, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            Link {
              color: #222;
              font-family: Cubano;
              line-height: 1.1;
              letter-spacing: 0.3rem;
              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #222;
            }
            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `30px auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.jaminjette.be">Dragan Markovic</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  
}

export default Layout
