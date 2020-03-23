import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "components/layout";
import Img from "gatsby-image";

export default class EpisodeList extends React.Component {
  get episodes() {
    return this.props.data.allMarkdownRemark.edges;
  }

  render() {
    return (
      <Layout>
        <section className="episode-list">
          <div className="page-heading">
            <h1 className="page-heading__title">Episodes</h1>
          </div>
          <ul className="episode-list__list">
            {this.episodes.map(({ node }, index) => (
              <li key={index} className="episode-list__list-item">
                <h2 className="episode-list__list-item__title">
                  <Link to={`episodes/${node.fields.slug}`}>Episode {node.frontmatter.episode_number}: {node.frontmatter.title}</Link>
                </h2>
                <div className="episode-list__list-item__content">
                  <Img className="episode-list__list-item__cover" fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  <div className="episode-list__list-item__body">
                    <div className="episode-list__list-item__description" dangerouslySetInnerHTML={{ __html: node.html }} />
                    <audio className="episode-list__list-item__player" controls={true} preload="none">
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

export const EpisodeListQuery = graphql`
  query episodeListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___release_date], order: DESC },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            episode_number
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
