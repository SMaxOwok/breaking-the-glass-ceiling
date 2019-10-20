const path = require("path");
const groupBy = require("lodash/groupBy");

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

  createNodeField({ node, name: "season", value: path.basename(getNode(node.parent).dir) });
  createNodeField({ node, name: "slug", value: parameterize(node.frontmatter.title) });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const episodeTemplate = path.resolve("src/templates/episode.js");
  const seasonEpisodeList = path.resolve("src/templates/seasonEpisodeList.js");

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
                    season
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
        const episodesBySeason = groupBy(episodes, 'node.fields.season');

        Object.keys(episodesBySeason).forEach(season => {
          // Make season index pages
          createPage({
            path: `${season}`,
            component: seasonEpisodeList,
            context: {
              season: season,
            }
          });

          // Make individual page for each episode in season
          episodesBySeason[season].forEach(({ node }) => {
            createPage({
              path: `${season}/${node.fields.slug}`,
              component: episodeTemplate,
              context: {
                ...node.fields
              }
            });
          });
        });
      })
    );
  })
};
