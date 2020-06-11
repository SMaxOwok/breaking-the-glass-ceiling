import React from "react";

import Layout from "components/layout";
import FeaturedEpisode from "components/featuredEpisode";
import Badges from "components/badges";

export default () => {

  return (
    <Layout>
      <div className="page-heading">
        <h1 className="page-heading__title">Breaking The Glass Ceiling</h1>
        <h2 className="page-heading__subtitle">A PDXWIT Podcast</h2>
      </div>

      <Badges />
      <FeaturedEpisode />
    </Layout>
  );
}
