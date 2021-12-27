<!--
  SFC for a card, which acts as a link from the homepage to a specific blog post.
  Copyright (c) 2021 Westermeister. All rights reserved.
-->
<template>
  <article class="homepage-blog-post-card-container">
    <a :href="rootRelativeUrl">
      <div class="homepage-blog-post-card">
        <div class="homepage-blog-post-card-content">
          <header>
            <p :class="['homepage-blog-post-category', tailwindColor]">
              {{ topic }}
            </p>
            <h2 class="homepage-blog-post-title">
              {{ title }}
            </h2>
          </header>
          <footer class="homepage-blog-post-dates-container">
            <div>
              <time
                class="homepage-blog-post-date"
                :datetime="publishedIsoFormat"
                >Published on {{ publishedReadable }}</time
              >
            </div>
            <div v-if="updatedIsoFormat">
              <time class="homepage-blog-post-date" :datetime="updatedIsoFormat"
                >Updated on {{ updatedReadable }}</time
              >
            </div>
          </footer>
        </div>
      </div>
    </a>
  </article>
  <!--
    We construct the Tailwind classes for the topics' colors programmatically.
    Thus, PurgeCSS doesn't realize that the colors are being used (since they aren't hard-coded).
    That's why we need this dummy div with all the colors listed out.
  -->
  <div
    v-if="false"
    class="
      text-slate-500
      text-gray-500
      text-zinc-500
      text-neutral-500
      text-stone-500
      text-red-500
      text-orange-500
      text-amber-500
      text-yellow-500
      text-lime-500
      text-green-500
      text-emerald-500
      text-teal-500
      text-cyan-500
      text-sky-500
      text-blue-500
      text-indigo-500
      text-violet-500
      text-purple-500
      text-fuchsia-500
      text-pink-500
      text-rose-500
    "
  ></div>
</template>

<script setup lang="ts">
/**
 * SFC properties.
 * @typeParam postId - Unique ID indicating Nth published post.
 *            @see The "@remarks" tag in the top doc comment of the CardList component.
 * @typeParam rootRelativeUrl - URL relative to webroot. Should have a leading slash, e.g. "/blog/my-blog-post".
 * @typeParam topic - A short, all-caps string indicating the topic e.g. "GAMING", "DEV JOURNAL", etc.
 * @typeParam topicColor - All lowercase name of a valid Tailwind color. Number 500 will be used. Applies to the topic.
 *                         @see {@link https://tailwindcss.com/docs/customizing-colors} for details.
 * @typeParam title - The title of the blog post.
 * @typeParam publishedIsoFormat - The date when the blog post was published.
 * @typeParam updatedIsoFormat - The date, if any, when the blog post was significantly changed (admittedly subjective).
 *                               e.g. Minor typo corrections wouldn't qualify, but a new section probably would.
 */
const props = defineProps<{
  postId: string;
  rootRelativeUrl: string;
  topic: string;
  topicColor: string;
  title: string;
  publishedIsoFormat: string;
  updatedIsoFormat?: string;
}>();

// Add Tailwind boilerplate around selected color.
const tailwindColor = `text-${props.topicColor}-500`;

/**
 * Converts month number to month name.
 * @param number - Integer in interval [1, 12].
 * @returns January, or February, etc.
 * @throws {Error} If the input parameter is not a valid number.
 */
function numberToMonth(number: number): string {
  switch (number) {
    case 1: {
      return "January";
    }
    case 2: {
      return "February";
    }
    case 3: {
      return "March";
    }
    case 4: {
      return "April";
    }
    case 5: {
      return "May";
    }
    case 6: {
      return "June";
    }
    case 7: {
      return "July";
    }
    case 8: {
      return "August";
    }
    case 9: {
      return "September";
    }
    case 10: {
      return "October";
    }
    case 11: {
      return "November";
    }
    case 12: {
      return "December";
    }
    default: {
      throw new Error(`Invalid month code: ${number}`);
    }
  }
}

/**
 * Generates a human readable date from an ISO-8601 date string.
 * @param isoDate - A date in ISO-8601 format e.g. "2021-12-23".
 * @returns A date like "December 23, 2021".
 */
function generateReadableDate(isoDate: string): string {
  const split = isoDate.split("-");
  const year = split[0];
  const month = numberToMonth(Number(split[1]));
  const day = split[2];
  return `${month} ${day}, ${year}`;
}

// Publish date that will be shown to the user.
const publishedReadable = generateReadableDate(props.publishedIsoFormat);

// Updated date that will be shown to the user.
// Has a dummy value if there was no update, which won't be shown.
const updatedReadable = props.updatedIsoFormat
  ? generateReadableDate(props.updatedIsoFormat)
  : "N/A";
</script>
