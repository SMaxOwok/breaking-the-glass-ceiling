import React  from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        logoImage: file(absolutePath: { regex: "/src/images/logo.png/" }) {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render={data => (
      <section className="meta">
        <Img className="meta__cover" fluid={data.logoImage.childImageSharp.fluid} />
        <p className="meta__description">Breaking The Glass Ceiling: A PDXWIT Podcast highlights the people working to make the tech industry a more diverse and inclusive place. On each episode, we will attempt to dig below the surface of our guest's achievements and challenges, showcasing the stories behind the story. We believe that focusing on the person and humanizing their lived experiences will help us shape the future of tech.</p>
        <ul className="meta__team">
          <li className="meta__team-member">
            <span>Brit Syer</span>
            <span>Co-host</span>
          </li>
          <li className="meta__team-member">
            <span>Juliana Kutch</span>
            <span>Co-host</span>
          </li>
          <li className="meta__team-member">
            <span>Max Ono</span>
            <span>Engineer</span>
          </li>
          <li className="meta__team-member">
            <span>Paul M. Trubachik</span>
            <span>Music</span>
          </li>
          <li className="meta__team-member">
            <span>Meghan Lewis</span>
            <span>Graphic Designer</span>
          </li>
        </ul>
        <p className="meta__callout">The PDXWIT podcast is sponsored by <a href="https://www.kiva.org">Kiva</a></p>
        <p className="meta__callout">Special thanks to <a href="https://www.castironcoding.com" target="_blank" rel="noopener noreferrer">Cast Iron Coding</a></p>
      </section>
    )}
  />
);
