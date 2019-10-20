import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "components/layout";
import Img from "gatsby-image";

export default class SeasonEpisodeList extends React.Component {

  get episodes() {
    return this.props.data.allMarkdownRemark.edges;
  }

  get season() {
    return this.props.pathContext.season.replace(/-/, " ");
  }

  urlForNode(node) {
    return `${node.fields.season}/${node.fields.slug}`;
  }

  render() {
    return (
      <Layout>
        <section className="season-episode-list">
          <div className="page-heading">
            <h1 className="page-heading__title">{this.season}</h1>
          </div>
          <ul className="season-episode-list__list">
            {this.episodes.map(({ node }, index) => (
              <li key={index} className="season-episode-list__list-item">
                <h2 className="season-episode-list__list-item__title">
                  <Link to={`/${this.urlForNode(node)}`}>{node.frontmatter.title}</Link>
                </h2>
                <div className="season-episode-list__list-item__content">
                  <Img className="season-episode-list__list-item__cover" fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  <div className="season-episode-list__list-item__body">
                    <div className="season-episode-list__list-item__description" dangerouslySetInnerHTML={{ __html: node.html }} />
                    <audio className="season-episode-list__list-item__player" controls={true} preload="none">
                      <source src={node.frontmatter.audio} />
                    </audio>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
};

export const SeasonEpisodeListQuery = graphql`
  query episodeListQuery($season: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___release_date], order: DESC },
      filter: { fields: { season: { eq: $season } } }
    ) {
      edges {
        node {
          fields {
            season
            slug
          }
          frontmatter {
            title
            release_date
            audio
            cover {
              childImageSharp{
                fluid(maxWidth: 350, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;
