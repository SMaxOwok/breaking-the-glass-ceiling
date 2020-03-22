import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/layout";

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
            <h1 className="about__title">Breaking The Glass Ceiling: A PDXWIT Podcast</h1>

            <p className="about__description">
              {`Breaking The Glass Ceiling: A PDXWIT Podcast highlights the people working to make the tech industry \
                a more diverse and inclusive place. On each episode, we will attempt to dig below the surface of our guest's \
                achievements and challenges, showcasing the stories behind the story.`}</p>
            <p className="about__description">
              We believe that focusing on the person and humanizing their lived experiences will help us shape the future of tech.
            </p>
            <p className="about__description">New episodes are released twice monthly, on a Monday.</p>

            <ul className="about__badges">
              <li className="about__badge about__badge-apple">
                <a href="https://podcasts.apple.com/us/podcast/breaking-the-glass-ceiling-a-pdxwit-podcast/id1456174095?mt=2&app=podcast">
                  <img alt="Listen on Apple Podcasts" src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-04T00:00:00Z&kind=podcast&bubble=podcasts" />
                </a>
              </li>
              <li className="about__badge about__badge-google">
                <a href='https://play.google.com/music/m/Ial22t2b2qk6rb5accjlzcemvnq?t=Breaking_The_Glass_Ceiling_A_PDXWIT_Podcast'>
                  <img alt="Listen on Google Music" src="https://play.google.com/intl/en_us/badges/static/images/badges-music/en_badge_web_music.png" />
                </a>
              </li>
              <li className="about__badge about__badge-radio-public">
                <a href="https://radiopublic.com/breaking-the-glass-ceiling-a-pdxw-8g0XVa">
                  <img alt="Listen on Radio Public" src="https://spotlight.radiopublic.com/images/badges/radiopublic-black.png" />
                </a>
              </li>
            </ul>
          </div>

          <Img className="about__cover" fluid={data.logoImage.childImageSharp.fluid} />
        </div>

        <div className="about__team">
          <h2 className="about__title">Podcast Volunteer Team</h2>
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

        <p className="about__callout">The PDXWIT podcast is sponsored by <a href="https://www.kiva.org" target="_blank" rel="noopener noreferrer">Kiva</a></p>
        <p className="about__callout">Special thanks to <a href="https://www.castironcoding.com" target="_blank" rel="noopener noreferrer">Cast Iron Coding</a> and Paul M. Trubachik</p>

        <div className="about__donate">
          <h2 className="about__title">Make A Donation</h2>

          <p className="about__description">
            {`We are a 501(c)(3) non-profit. Any donation helps to transform lives through education, skill-building events, \
              mentorship, and supporting those who identify as women, non-binary and underrepresented in the Portland tech \
              community. We sincerely appreciate your contribution to help fuel our purpose and vision.`}
          </p>

          <div className="about__donate__link">
            <a href="https://www.pdxwit.org/giving">Donate</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
