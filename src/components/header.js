import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query PDXWITLogoQuery {
        logoImage: file(absolutePath: { regex: "/src/images/pdxwit_logo.png/" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
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
          <Link to="/about" className="header__nav-item">
            About
          </Link>
        </div>
      </header>
    )}
  />
);
