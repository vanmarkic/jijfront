import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import {colors} from '../../src/theme'
import Logo from '../images/svg/logo.svg'

const NavLink = styled(Link)`
  color: ${colors.greypurple};
  font-size: 1rem;
  font-family : 'Cubano-Regular', 'Arial', 'Helvetica';
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: auto 0.5rem auto 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page, :hover  {
    border-bottom: 2px solid ${colors.yellorange};
  }
  &:last-of-type {
    margin-right: 0;
  }

`

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressMenusMenusItems {
          edges {
            node {
              items {
                post_title
                post_name
                menu_order
                menu_item_parent
                title
                slug
                post_parent
                child_items {
                  menu_order
                  slug
                  post_title
                  post_name
                  title
                }
              } 
            }
          }
        }
      }
    `}

    render={data => (
      <header
        css={css`
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-around;
          ${'' /* padding: 0.5rem calc((100vw - 900px - 0.5rem) / 2); */}
        `}
      >
        <NavLink to="/">
          <Logo  css={css`
            height : 50px;
            width: auto;
            color : black;
        `}/>
        </NavLink>

        <nav
          css={css`
            margin-top: 0;
            display:flex;
          `}
        >
          {data.allWordpressMenusMenusItems.edges[0].node.items.slice(1).map(document => 
            (<NavLink
              to={"/fr/" + document.slug}
            >
              <div
                dangerouslySetInnerHTML={{ __html: document.title }}
              />
              {document.child_items && document.child_items.map(item => <NavLink
              to={"/fr/" + item.slug}
              activeClassName="current-page"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
                </NavLink>)
              }
            </NavLink>)
          )}
          <NavLink
              to={"/fr/"}
              activeClassName="current-page"
            >
              FR
            </NavLink>
            <NavLink
              to={"/nl/"}
              activeClassName="current-page"
            >
              NL
            </NavLink>


        </nav>
      </header>
    )}
  ></StaticQuery>
)

export default Header