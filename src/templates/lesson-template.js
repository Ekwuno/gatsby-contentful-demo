import React from "react"
import {graphql} from 'gatsby'

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
    </>
)

export default LessonTemplate