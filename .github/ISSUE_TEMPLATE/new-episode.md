---
name: New Episode
about: Add an issue for a newly released episode
title: "[EPISODE] [Enter the episode title]"
labels: new episode
assignees: ''
---

*Instructions for adding a new episode*
1. Download the cover image from the URL in the materials section.
2. Add the cover image to `src/images/episodes` with the file name `episode-[#].jpg`.
3. Add a markdown file to `src/pages/episodes` with the file name `episode-[#].md`.
4. Copy the frontmatter into the markdown file.
    - Be sure to adjust `cover` to reference your episode image.
6. Add the description below the frontmatter.

<br />
<br />

**Materials**
cover: [Enter the download URL for the cover image]

**Frontmatter**
```
---
title: [Enter the title in quotation marks]
episode_number: [Enter the episode number]
release_date: [Enter the release date in the format "yyyy-mm-dd"]
cover: ../../images/episodes/episode-[#].jpg
audio: [Enter the audio URL -- ensure it starts with `https`]
---
```

**Description**
[Enter the episode description]
