const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryResults = await graphql(`
    query Recipes {
      Drupal {
        nodeRecipes(first:10) {
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
            mediaImage {
              mediaImage {
                url
              }
            }
            recipeInstruction {
              value
              format
              processed
            }
          }
        }
        nodeArticles(first:10) {
          nodes {
            changed
            created
            id
            path
            title
            mediaImage {
              mediaImage {
                url
              }
            }
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

    const articleTemplate = path.resolve(`src/templates/articleTemplate.js`)
    queryResults.data.Drupal.nodeArticles.nodes.forEach(node => {
        createPage({
            path: `${node.path}`,
            component: articleTemplate,
            context: {
                article: node,
            },
        })
    })
}