/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({graphql, actions,reporter})=>{
    const {createPage} = actions

    const result = await graphql(
        `{
            allContentfulLesson {
              nodes {
                slug
              }
            }
          }
          
                 
        `
    );

    if (result.error){
        reporter.panic('Error loading lessons',JSON.stringify(result.errors));
    }
    const lessonsTemplate = require.resolve(`./src/templates/lesson-template.js`)
    result.data.allContentfulLesson.nodes.forEach(lesson =>{
        createPage({
            path: `/${lesson.slug}/`,
            component: lessonsTemplate,
            context: {
                slug:lesson.slug
            },
        })
    })
    
}