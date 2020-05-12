import React from "react"
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
export const query = graphql`
query($slug: String!){

       lesson: contentfulLesson(slug: {eq: $slug}) {
          title
          video
          description {
            json
          }
          author {
            name
            twitter
          }
          seo {
            title
            description {
              description
            }
          }
        }
      
      
}
`

const LessonTemplate =({data:{lesson}})=>(
    <>
        <h1>{lesson.title}</h1>
        <p>Guest: {lesson.author.name} - <a href={lesson.author.twitter}>Twitter</a></p>
        <div>
            {documentToReactComponents(lesson.description.json,{
                renderNode: {
                            [BLOCKS.EMBEDDED_ASSET]:(node,children)=> (
                            <img
                                src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
                                alt= {node.data.target.fields.title["en-US"]}
                            />
                            ),
                    },
    })}
</div>
    </>
)

export default LessonTemplate