const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryResults = await graphql(`
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
    `)

    const recipeTemplate = path.resolve(`src/templates/template.js`)
    queryResults.data.Drupal.nodeRecipes.nodes.forEach(node => {
        createPage({
            path: `${node.path}`,
            component: recipeTemplate,
            context: {
                recipe: node,
            },
        })
    })
}