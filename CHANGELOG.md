# 2021.11.20

- Added a simple explanation of the repository's structure to `README.md`.

# 2021.09.28

- Reworded a few sentences for clarity in blog post: "My Website Was Stolen"
- Removed "updated" date for blog post: "Kenny or Jane?"
  - The changes made came only a day after publishing, and they were trivial.

# 2021.09.27.1

- Modified blog post: "My Website Was Stolen"
  - Blackened out an extra piece of information in the second screenshot.
  - Added quotes around phrase "name-and-shame".

# 2021.09.27

- Added new post: "My Website Was Stolen"
- Added styling for images and captions for blog posts.
- Fixed outdated alt description for hero image of blog post: "Kenny or Jane?"
- Shortened hero image credit link for blog post: "Are Software Engineers Really Engineers?"

# 2021.09.22

- Modified miscellaneous content in blog post: "Kenny or Jane?"
  - Fixed missing newline in "Kenny or Jane?" blog post by the datetime metadata.
  - Changed hero image's credit to link to the game series as a whole instead of the individual game.

# 2021.09.14

- Updated post: "Kenny or Jane?"
  - Made minor adjustments to content.
  - Fixed a typo.

# 2021.09.13

- Change directory structure from `frontend/src` to `src/frontend`.
- Changed markup for blog posts.
  - Refactored HTML/CSS naming from "cover photo" to "hero image", as the latter is more common.
  - Changed how hero images cover the background by cropping them to size instead of downscaling.
  - Added styling for section headers within blog posts.
  - Changed color of links in blog posts to a more muted sky blue rather than cyan.
  - Updated [heroicons](https://heroicons.com/) attribution to link to self-hosted legal notice instead of including it
    directly in the HTML.
- Updated homepage.
  - Updated career title in homepage.
  - Refactored position of `article` tags in homepage to be more in-line with semantic meaning.
  - Made minor update to copyright notice's comment formatting.
  - Slightly increased spacing between blog post cards.
- Moderated message in existing post: "Are Software Engineers Really Engineers?"
- Added a new post: "Kenny or Jane?"

# 2021.08.16

- Downscaled blog posts' maximum font scaling from `text-xl` to `text-lg` i.e. `1.25rem` to `1.125rem`.
- Changed styling of blog posts' lists to be like normal paragraphs. Specifically:
  - Margins are now flush with paragraphs. This includes the bullet/numerical markers.
  - No more left-indent from the second line onwards.

# 2021.08.12

- Modified cover photo for blog post: "Are Software Engineers Really Engineers?"
  - Downscaled for smaller size and better transfer performance.
  - Added `alt` tag for accessibility.

# 2021.08.10

- Modify cover photo link for blog post: "Are Software Engineers Really Engineers?"
  - Now it's a referral link rather than a generic one.

# 2021.08.01.5

- Modify homepage blog post card for: "Are Software Engineers Really Engineers?"
  - Fix incorrect datetime attribute for publishing date.
  - Add missing "Updated on" date.

# 2021.08.01.4

- Update styling of copyright notices.
  - In blog post "Are Software Engineers Really Engineers?", footer now uses &copy; instead of `(C)`.
  - In homepage and in main stylesheet, `(C)` is replaced by `(c)` as the latter is explicitly approved by the [U.S.
    Copyright Office](https://www.copyright.gov/comp3/).

# 2021.08.01.3

- Minor content adjustments to blog post: "Are Software Engineers Really Engineers?"

# 2021.08.01.2

- Fix minor typo in blog post: "Are Software Engineers Really Engineers?"

# 2021.08.01.1

- Changes to blog post: "Are Software Engineers Really Engineers?"
  - Fixed bug where the "Updated on" datetime doesn't appear on its own line.
  - Modified footer to contain a `div` tag instead of a `p` tag to avoid misleading semantics.

# 2021.08.01

- Major rewrite of blog post: "Are Software Engineers Really Engineers?"
  - The updated post, unlike the original, is not licensed under [CC BY-SA
    4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- Changed styling of footer for blog posts: the copyright notice is now centered instead of being left-aligned with the
  blog post's text.

# 2021.07.31.1

- Added copyright notices (as comments) to homepage and main stylesheet.

# 2021.07.31

- Modified styling of cover picture's credit line for blog posts. No longer has a border, nor any opacity animations.
  - This change makes the credit line look more minimalistic and clean.

# 2021.07.26.1

- Added missing `transition` class for homepage's blog post cards.
  - This might be unnecessary, since the pop-up animation seems to work fine regardless. However, all examples for
    transitions in the Tailwind docs included the `transition` class, so it's probably better to err on the side of
    caution.

# 2021.07.26

- Initial deploy with basic homepage and first blog post: "Are Software Engineers Really Engineers?"
