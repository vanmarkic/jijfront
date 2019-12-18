import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../theme"

const ArticleCard = ({ post }) => (
  <div
    css={css`
      ${
        "" /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
      }
      padding: 15px;
      ${"" /* border-radius: 5px; */}
      background-color: ${colors.ciel};
    `}
  >
    <Link to={`/post/${post.slug}`}>
      <h2>
        <div dangerouslySetInnerHTML={{ __html: post.title }} css={css`
          font-family: Cubano-Regular;
        `}/>
      </h2>
      <h5>{post.date}</h5>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </Link>
  </div>
)

export default ArticleCard
