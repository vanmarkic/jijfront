/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)
const isObject = require(`util`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions  
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const posts = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            title
            date(formatString: "D MMMM YYYY")
            content
            wordpress_id
            wpml_current_locale
            wpml_translations {
              content
              locale
              wordpress_id
              slug
              date(formatString: "D MMMM YYYY")
              title 
            }
          }
        }
      }
    }
  `)

  const PageTemplate = path.resolve("./src/templates/Page.js")
  const pages = await graphql(`
      {
        allWordpressPage {
          edges {
            node {
              content
              title
              slug
              wordpress_id
              date(formatString: "D MMMM YYYY")
              wpml_current_locale
              wpml_translations {
                title
                locale
                wordpress_id
                slug
                date(formatString: "D MMMM YYYY")
                title 
                content
              }
            }
          }
        }
      }
  `)



  if (posts.errors) {
    reporter.panicOnBuild(`Posts : Error while running GraphQL query.`)
    return
  }

  if (pages.errors) {
    reporter.panicOnBuild(`Pages : Error while running GraphQL query.`)
    return
  }

  const Pages = pages.data.allWordpressPage.edges
  Pages.forEach(page => {
    createPage({
      path: page.node.slug === 'home' ? 'fr' : `fr/${page.node.slug}`,
      component: PageTemplate,
      context: {
        id: page.node.wordpress_id,
        locale: page.node.wpml_current_locale,
        content: page.node.content,
        date :  page.node.date,
        slug : page.node.slug,
        title : page.node.title
      },
    })
    if (page.node.wpml_translations.length ) {createPage(
      {
        path: page.node.wpml_translations[0].slug === 'home' ? 'nl' : `nl/${page.node.wpml_translations[0].slug}`,
        component: PageTemplate,
        context: {
          content: page.node.wpml_translations[0].content,
          date :  page.node.wpml_translations[0].date,
          slug : page.node.wpml_translations[0].slug,
          title : page.node.wpml_translations[0].title,
          id: page.node.wpml_translations[0].wordpress_id,
          locale: page.node.wpml_translations[0].locale, 
        },
      }
    )}
  })


  const BlogPosts = posts.data.allWordpressPost.edges
  BlogPosts.forEach(post => {
    
    createPage({
      path: `fr/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
        locale: post.node.wpml_current_locale,
        content: post.node.content,
        date :  post.node.date,
        slug : post.node.slug,
        title : post.node.title
      },
    })
    if (post.node.wpml_translations.length) {
      console.log("creating post translation")
      createPage({
        path: `nl/post/${post.node.wpml_translations[0].slug}`,
        component: BlogPostTemplate,
        context: {
          content: post.node.wpml_translations[0].content,
          date :  post.node.wpml_translations[0].date,
          slug : post.node.wpml_translations[0].slug,
          title : post.node.wpml_translations[0].title,
          id: post.node.wpml_translations[0].wordpress_id,
          locale: post.node.wpml_translations[0].locale, 
        },
      }
    )}  
  })
}