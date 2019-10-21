import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        logoImage: file(absolutePath: { regex: "/src/images/pdxwit_logo.png/" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        seasons: allMarkdownRemark {
          distinct(field: fields___season)
        }
      }
    `}
    render={data => (
      <header className="header">
        <div className="header__nav header__nav--left">
          <a href="https://www.pdxwit.org">
            <Img className="header__logo" fixed={data.logoImage.childImageSharp.fixed} />
          </a>
        </div>

        <div className="header__nav header__nav--right">
          {data.seasons.distinct.map(season => (
            <Link to={`/${season}`} className="header__nav-item">
              {season.replace(/-/, " ")}
            </Link>
          ))}
          <Link to="/about" className="header__nav-item">
            About
          </Link>
        </div>
      </header>
    )}
  />
);
