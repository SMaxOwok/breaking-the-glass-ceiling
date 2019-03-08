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
        <section>
          <h1>Breaking The Glass Ceiling</h1>
          <h2>A PDXWIT Podcast</h2>
          <p>Breaking The Glass Ceiling: A PDXWIT Podcast highlights the people working to make the tech industry a more diverse and inclusive place. On each episode, we will attempt to dig below the surface of our guest's achievements and challenges, showcasing the stories behind the story. We believe that focusing on the person and humanizing their lived experiences will help us shape the future of tech.</p>
          <ul>
            <li>
              <span>Brit Syer</span>
              <span>Co-host</span>
            </li>
            <li>
              <span>Juliana Kutch</span>
              <span>Co-host</span>
            </li>
            <li>
              <span>Max Ono</span>
              <span>Engineer</span>
            </li>
            <li>
              <span>Paul M. Trubachik</span>
              <span>Music</span>
            </li>
          </ul>
          <p>Special thanks to <a href="http://www.castironcoding.com" target="_blank" rel="noopener noreferrer">Cast Iron Coding</a></p>
        </section>
        <section>
          <h1>Episodes</h1>
          <ul>
            {this.episodes.map(({ node }, index) => (
              <li key={index}>
                <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                <h3>{node.frontmatter.title}</h3>
                <div>
                  <p>{node.frontmatter.description}</p>
                  <audio controls={true} preload="none">
                    <source src={node.frontmatter.audio} />
                  </audio>
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
            description
            cover {
              childImageSharp{
                fluid(maxWidth: 350, maxHeight: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
