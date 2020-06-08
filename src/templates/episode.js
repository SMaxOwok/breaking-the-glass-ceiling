import React from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Transcript from "components/transcript";
import Img from "gatsby-image";

export default ({ data }) => {
  const node = data.markdownRemark;

  return (
    <Layout>
      <section className="episode">
        <h2 className="episode__title">{`Episode ${node.frontmatter.episode_number}: ${node.frontmatter.title}`}</h2>
        <div className="episode__content">
          <Img className="episode__cover" fluid={node.frontmatter.cover.childImageSharp.fluid} />
          <div className="episode__body">
            <div className="episode__description" dangerouslySetInnerHTML={{ __html: node.html }} />
            <audio className="episode__player" controls={true} preload="none">
              <source src={node.frontmatter.audio} />
            </audio>
          </div>
        </div>

        {node.frontmatter.transcript && (
          <Transcript transcript={node.frontmatter.transcript.childMarkdownRemark.html} />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {  
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        transcript {
          childMarkdownRemark {
            html
          }
        }
      }
      html 
    }  
  }
`;
