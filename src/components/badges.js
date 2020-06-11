import React from "react";

export default function Badges() {
  return (
    <ul className="badges">
      <li className="badges__badge badges__badge-apple">
        <a href="https://podcasts.apple.com/us/podcast/breaking-the-glass-ceiling-a-pdxwit-podcast/id1456174095?mt=2&app=podcast">
          <img alt="Listen on Apple Podcasts" src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-04T00:00:00Z&kind=podcast&bubble=podcasts" />
        </a>
      </li>
      <li className="badges__badge badges__badge-google">
        <a href='https://play.google.com/music/m/Ial22t2b2qk6rb5accjlzcemvnq?t=Breaking_The_Glass_Ceiling_A_PDXWIT_Podcast'>
          <img alt="Listen on Google Music" src="https://play.google.com/intl/en_us/badges/static/images/badges-music/en_badge_web_music.png" />
        </a>
      </li>
      <li className="badges__badge badges__badge-radio-public">
        <a href="https://radiopublic.com/breaking-the-glass-ceiling-a-pdxw-8g0XVa">
          <img alt="Listen on Radio Public" src="https://spotlight.radiopublic.com/images/badges/radiopublic-black.png" />
        </a>
      </li>
    </ul>
  );
}
