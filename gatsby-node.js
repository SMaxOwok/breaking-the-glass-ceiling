const path = require("path");
const chunk = require("lodash/chunk");

const PER_PAGE = 10;


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const episodeListTemplate = path.resolve(`src/templates/episodeList.js`);

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            episodes: allMarkdownRemark(sort: { fields: [frontmatter___release_date], order: DESC }) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }


        const chunks = chunk(result.data.episodes.edges, PER_PAGE);

        chunks.forEach((chunk, index) => {
          createPage({
            path: index === 0 ? `episodes/` : `/episodes/${index + 1}`,
            component: episodeListTemplate,
            context: {
              skip: PER_PAGE * index,
              limit: PER_PAGE,
              pageNumber: index + 1
            }
          })
        })
      })
    )
  })
};
