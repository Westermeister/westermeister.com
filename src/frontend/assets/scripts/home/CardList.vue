<!--
  SFC for the list of cards (i.e. blog posts) on the homepage.

  @remarks
  This SFC's template must be updated every time there's a new blog post.
  The <script> tag is only for importing the relevant component, and doesn't need to be updated.
  Each card has a unique ID number that tells when it was published, starting from 1, then 2, etc.
  That number has no effect, but it does identify where corresponding assets are for each blog post.
  For instance, if a blog post (of ID "1") has several images, then those images are in "/assets/images/blog/1/".
  In essence, the IDs are only for documentation purposes.

  Copyright (c) 2021 - 2022 Westermeister
-->
<template>
  <Card
    postId="4"
    rootRelativeUrl="/blog/my-love-hate-relationship-with-dead-by-daylight"
    topic="GAMING"
    topicColor="purple"
    title="My Love-Hate Relationship with Dead by Daylight"
    publishedIsoFormat="2022-03-17"
  />
  <Card
    postId="3"
    rootRelativeUrl="/blog/my-website-was-stolen"
    topic="DEV JOURNAL"
    topicColor="cyan"
    title="My Website Was Stolen"
    publishedIsoFormat="2021-09-27"
  />
  <Card
    postId="2"
    rootRelativeUrl="/blog/kenny-or-jane"
    topic="GAMING"
    topicColor="purple"
    title="Kenny or Jane?"
    publishedIsoFormat="2021-09-13"
  />
  <Card
    postId="1"
    rootRelativeUrl="/blog/are-software-engineers-really-engineers"
    topic="DEV JOURNAL"
    topicColor="cyan"
    title="Are Software Engineers Really Engineers?"
    publishedIsoFormat="2021-07-26"
    updatedIsoFormat="2021-09-13"
  />
</template>

<script setup lang="ts">
import Card from "./Card.vue";
</script>
