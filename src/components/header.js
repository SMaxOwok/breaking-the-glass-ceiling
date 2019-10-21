import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import MobileMenu from "./mobileMenu";

const Header = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const links = [
    ...data.seasons.distinct,
    'about'
  ];

  return (
    <header className="header">
      <div className="header__nav header__nav--left">
        <a href="https://www.pdxwit.org">
          <Img className="header__logo" fixed={data.logoImage.childImageSharp.fixed} />
        </a>
      </div>

      <div className="header__nav header__nav--right">
        <div className="header__links">
          {links.map(link => (
            <Link key={link} to={`/${link}`} className="header__nav-item">
              {link.replace(/-/, " ")}
            </Link>
          ))}
        </div>

        <MobileMenu links={links} />
      </div>
    </header>
  );
};

export default Header;
