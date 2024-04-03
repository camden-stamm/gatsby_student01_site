import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Recipes">
        {
        data.Drupal.nodeRecipes.nodes.map(node => (
          <article key={node.title}>
            <h2>
              <Link to={`${node.path}`}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query Recipes {
  Drupal {
    nodeRecipes(first: 10) {
      nodes {
        changed
        cookingTime
        created
        difficulty
        id
        ingredients
        numberOfServings
        path
        preparationTime
        status
        title
      }
    }
  }
}
`

export const Head = () => <Seo title="Recipe Links" />

export default BlogPage