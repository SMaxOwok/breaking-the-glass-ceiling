import React from "react";
import { graphql } from "gatsby";
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
          <ul className="episode-list__list">
            {this.episodes.map(({ node }, index) => (
              <li key={index} className="episode-list__list-item">
                <h2 className="episode-list__list-item__title">{node.frontmatter.title}</h2>
                <div className="episode-list__list-item__body">
                  <Img className="episode-list__list-item__cover" fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  <div>
                    <div className="episode-list__list-item__description" dangerouslySetInnerHTML={{ __html: node.html }}></div>
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
          html
        }
      }
    }
  }
`;
