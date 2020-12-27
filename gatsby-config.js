/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { typeNameFromDir } = require("gatsby-transformer-csv")

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-transformer-csv`,
            options: {
                typeName: typeNameFromDir,
            },
        },
    ],
}
