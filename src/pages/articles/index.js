import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
        {
        data.Drupal.nodeArticles.nodes.map(node => (
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
    nodeArticles(first: 10) {
      nodes {
        changed
        created
        id
        path
        title
      }
    }
  }
}
`

export const Head = () => <Seo title="Article Links" />

export default BlogPage