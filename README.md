# westermeister.com

This is the repository for my personal website and blog, [Westermeister](https://westermeister.com).

The root of the project contains configuration files; most notably, a Tailwind configuration file. It also contains a
`src` directory which contains (at least for now) only frontend code.

## src

This directory contains a `sitemap.xml` and an associated `robots.txt` for SEO. It also contains HTML for the homepage
and each blog post. Finally, it contains static files in `assets`. Those files include documents, images, and
stylesheets. Together, they create the frontend interface for the website.

The stylesheets in particular use Tailwind's `@apply` to create easily-reusable classes that can be applied to each blog
post, which streamlines the creation and editing of new posts.
