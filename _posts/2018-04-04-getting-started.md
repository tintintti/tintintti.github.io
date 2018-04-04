---
layout: post
title: getting started with jekyll
---
Setting up a blog with Jekyll in GitHub Pages was pretty straightforward. GitHub Pages uses Jekyll, so deploying the site is basically just pushing it to GitHub.

For installing Jekyll you need Ruby. I installed it using [rbenv](https://github.com/rbenv/rbenv). Jekyll (and Bundler) can then be installed using the command `gem install jekyll bundler`.

Having installed Jekyll and fiddled around with it for a while, I created a repository in GitHub for the page. The repository name needs to be *[username].github.io* for the GitHub Pages to work, so I created one named *tintintti.github.io*.

Clone the repo and in the root directory of your local repository run `jekyll new .` and Jekyll will create a base for your blog with the default theme [minima](https://github.com/jekyll/minima). If you want, you can also specify a subdirectory where Jekyll will create the files, for example `jekyll new blog` will create the files to a directory called `blog`. These are the files Jekyll creates:
```
.
├── 404.html
├── about.md
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.md
└── _posts
    └── 2018-04-04-welcome-to-jekyll.markdown
```
Running `bundle exec jekyll serve` will build the site on a preview server and it can then be found at http://localhost:4000.

The generated post `2018-04-04-welcome-to-jekyll.markdown` has instructions on how to create a new post in jekyll. Basically you create a markdown file under the directory \_posts and name it starting with the date in format `YYYY-MM-DD` and after that the name of the post. The file should start with a [front matter block](https://jekyllrb.com/docs/frontmatter/) which contains variables like the layout used and the title of the blog post:
```
---
layout: post
title:  title of yout post
---
```
Then you can write your blog post using markdown! Pushing the new blog post (or any other changes) to GitHub will cause GitHub Pages to build and publish on your site at *https://[username].github.io*.
