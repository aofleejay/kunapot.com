/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require('lodash')
const kebabCase = require('lodash').kebabCase
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blogs` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogListTemplate = path.resolve('./src/templates/blog-list.js')
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
  const tagTemplate = path.resolve('./src/templates/tags.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `/page/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })

    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      let postTag = 0
      posts.forEach(({ node }) => {
        postTag += node.frontmatter.tags.filter(t => t.includes(tag)).length
      })

      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          tag,
          limit: postsPerPage,
          skip: 0,
          numPages: postTag,
          currentPage: 1,
        },
      })

      const numTagPages = Math.ceil(postTag / postsPerPage)
      Array.from({ length: numTagPages }).forEach((_, i) => {
        createPage({
          path: `/tags/${kebabCase(tag)}/page/${i + 1}`,
          component: tagTemplate,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            tag,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numTagPages,
            currentPage: i + 1,
          },
        })
      })
    })
  })
}
