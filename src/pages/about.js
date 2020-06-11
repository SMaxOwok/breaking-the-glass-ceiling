import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";
import Badges from "components/badges";

export default () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logoImage: file(absolutePath: { regex: "/src/images/logo.png/" }) {
        childImageSharp {
          fluid(maxHeight: 250, maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kimberlyEmbry: file(absolutePath: { regex: "/src/images/team/kimberly_embry.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dawnMott: file(absolutePath: { regex: "/src/images/team/dawn_mott.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aprilLeonard: file(absolutePath: { regex: "/src/images/team/april_leonard.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maxOno: file(absolutePath: { regex: "/src/images/team/max_ono.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      minaMeman: file(absolutePath: { regex: "/src/images/team/mina_meman.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sarahMayfield: file(absolutePath: { regex: "/src/images/team/sarah_mayfield.png/" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <section className="about">
        <div className="about__header">
          <div className="about__header__body">
            <h1 className="page-heading__title">Breaking The Glass Ceiling: A PDXWIT Podcast</h1>

            <p className="about__description">
              {`Breaking The Glass Ceiling: A PDXWIT Podcast highlights the people working to make the tech industry \
                a more diverse and inclusive place. On each episode, we will attempt to dig below the surface of our guest's \
                achievements and challenges, showcasing the stories behind the story.`}</p>
            <p className="about__description">
              We believe that focusing on the person and humanizing their lived experiences will help us shape the future of tech.
            </p>
            <p className="about__description">New episodes are released twice monthly, on a Monday.</p>

            <Badges />
          </div>

          <Img className="about__cover" fluid={data.logoImage.childImageSharp.fluid} />
        </div>

        <div className="about__team">
          <h2 className="page-heading__title">Podcast Volunteer Team</h2>
          <ul className="about__team-list">
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.kimberlyEmbry.childImageSharp.fluid} />
              <span>Kimberly Embry</span>
              <span>Co-host</span>
            </li>
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.dawnMott.childImageSharp.fluid} />
              <span>Dawn Mott</span>
              <span>Co-host</span>
              <span>Producer / Special Projects</span>
            </li>
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.aprilLeonard.childImageSharp.fluid} />
              <span>April Leonard</span>
              <span>Podcast Lead</span>
            </li>
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.maxOno.childImageSharp.fluid} />
              <span>Max Ono</span>
              <span>Audio Engineer</span>
            </li>
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.minaMeman.childImageSharp.fluid} />
              <span>Mina Meman</span>
              <span>Podcast Transcriber</span>
            </li>
            <li className="about__team-member">
              <Img className="about__headshot" fluid={data.sarahMayfield.childImageSharp.fluid} />
              <span>Sarah Mayfield</span>
              <span>Podcast Transcriber</span>
            </li>
          </ul>
        </div>

        <div className="about__donate">
          <h2 className="page-heading__title">Make A Donation</h2>

          <p className="about__description">
            {`We are a 501(c)(3) non-profit. Any donation helps to transform lives through education, skill-building events, \
              mentorship, and supporting those who identify as women, non-binary and underrepresented in the Portland tech \
              community. We sincerely appreciate your contribution to help fuel our purpose and vision.`}
          </p>

          <div className="about__donate__link">
            <a href="https://www.pdxwit.org/giving" target="_blank" rel="noopener noreferrer">Donate</a>
          </div>
        </div>

        <p className="about__callout">The PDXWIT podcast is sponsored by <a href="https://www.kiva.org" target="_blank" rel="noopener noreferrer">Kiva</a></p>
        <p className="about__callout">Special thanks to <a href="https://www.castironcoding.com" target="_blank" rel="noopener noreferrer">Cast Iron Coding</a> and Paul M. Trubachik</p>
      </section>
    </Layout>
  );
};
