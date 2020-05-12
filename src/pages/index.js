import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image" 
import SEO from "../components/seo"
import {graphql} from 'gatsby'

export const query = graphql`
{
  lessons: allContentfulLesson {
    nodes {
      title
      slug
      author {
        name
        twitter
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people welcome to the demo of stuff </h1>
    {data.lessons.nodes.map(lesson =>(
      <div key={`lesson-${lesson.slug}`}> 
      <h2> 
        <Link to= {`/${lesson.slug}`}>
         {lesson.title}(with {lesson.author.name})
        </Link>
      </h2>

      </div>
    ))}
  </Layout>
)

export default IndexPage
