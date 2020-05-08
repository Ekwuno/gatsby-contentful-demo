import React from "react"
// import {graphql} from "gatsby"

// export const query = graphql`
// query SiteQuery {
//     allContentfulAuthor(limit: 100) {
//       edges {
//         node {
//           id
//           tittle
//           updatedAt
//           childContentfulAuthorContentRichTextNode {
//             content
//           }
//         }
//       }
//     }
//   }
// `

const Blog = ({pageContext})=>
{
    return(
        <> 
            <h1>{pageContext.tittle}</h1>
            {/* <p>{pageContext.allContentfulAuthor.edges.node.childContentfulAuthorContentRichTextNode.content}</p> */}
        
        </>
    )
}

export default Blog