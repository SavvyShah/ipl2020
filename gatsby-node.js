const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const MatchTemplate = path.resolve(`src/templates/matches.js`)
    const result = await graphql(`
        {
            allMatchesCsv {
                nodes {
                    id
                }
            }
        }
    `)
    result.data.allMatchesCsv.nodes.forEach((node) => {
        createPage({
            path: `/matches/${node.id}`,
            component: MatchTemplate,
            context: {
                match_id: node.id,
            },
        })
    })
}
