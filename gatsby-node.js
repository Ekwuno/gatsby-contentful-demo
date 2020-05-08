/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions

    const result = await graphql(
        `query SiteQuery {
            allContentfulAuthor(limit: 100) {
              edges {
                node {
                  
                  tittle
                  
                }
              }
            }
          }         
        `
    )
    const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
    result.data.allContentfulAuthor.edges.forEach(edge =>{
        const blog = edge.node
        createPage({
            path: `/blog/${blog.tittle}/`,
            component: blogPostTemplate,
            context: {
                 tittle: blog.tittle,
            },
        })
    })
    
}