const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

const PER_PAGE = 10;

// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-7.php
function parameterize(string) {
  return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "").replace(/\s/g, "-");
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== "MarkdownRemark") return null;

  createNodeField({
    node, name: "slug",
    value: parameterize(`${node.frontmatter.episode_number}-${node.frontmatter.title}`)
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const episodeTemplate = path.resolve("src/templates/episode.js");
  const episodeListTemplate = path.resolve("src/templates/episodeList.js");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            episodes: allMarkdownRemark(sort: { fields: [frontmatter___release_date], order: DESC }) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) reject(result.errors);

        const episodes = result.data.episodes.edges;

        // Paginate episodes and make index pages
        paginate({
          createPage,
          items: episodes,
          itemsPerPage: PER_PAGE,
          pathPrefix: '/episodes',
          component: episodeListTemplate,
        });

        // Make individual page for each episode in season
        episodes.forEach(({ node }) => {
          createPage({
            path: `episodes/${node.fields.slug}`,
            component: episodeTemplate,
            context: {
              ...node.fields
            }
          });
        });
      })
    );
  })
};
