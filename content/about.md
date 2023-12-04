This website is final project for SI 339 at the University of Michigan. This website is a simple Content Management System (CMS) built in [Nuxt JS](https://nuxt.com) using the [Content plugin](https://content.nuxt.com). 

The great thing about the Content plugin is that it automatically parses Markdown files into HTML and renders it. It allows for a lot of flexibility with how the text is displayed (It just uses components, so they can be overwritten if needed!) and wildcard pages are easy to implement. 

## Features

- Home page that sorts blog posts by date
- Working tag links on the home page and individual blog posts
- Tag pages that display all posts with a certain tag, grabbed from the route
- 404 pages that appear when a user visits an invalid URL for blog posts, tags, or general pages
- Wildcard logic that automatically parses Markdown files for blog posts (/content/essays), general pages (/content/), and tags (automatically generated)

## Site Content

Since using Lorem Ipsum or ChatGPT generated content to illustrate the functionality of this project would be lame, I populated this simple blog CMS with essays that I wrote in highschool. Yes, I went to a [pretty rad highschool](https://asmsa.org). 