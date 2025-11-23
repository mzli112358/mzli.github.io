# Martin Li's Academic Portfolio

This repository contains the source code for Martin Li's (Mingzhe Li) academic homepage and personal portfolio website, built with Jekyll.

## Project Structure

```
.
├── _config.yml              # Jekyll configuration file
├── _data/                   # Data files
│   ├── navigation.yml       # Navigation menu
│   ├── authors.yml          # Author information
│   └── ui-text.yml          # UI text strings
├── _includes/               # Reusable HTML fragments
│   ├── masthead.html        # Navigation bar
│   ├── footer.html          # Footer
│   └── author-profile.html  # Author profile sidebar
├── _layouts/                # Page layout templates
│   ├── default.html         # Default layout
│   ├── single.html          # Single page layout
│   └── archive.html         # Archive page layout
├── _pages/                  # Page content files
│   ├── about.md             # Homepage (Profile)
│   └── portfolio.html       # Portfolio page
├── _publications/           # Publications collection
│   └── *.md                 # Individual publication files
├── _portfolio/              # Portfolio projects collection
│   └── *.md                 # Individual project files
├── _posts/                  # Blog posts
├── _sass/                   # Sass stylesheets
├── assets/                  # Static assets (CSS, JS, fonts)
├── images/                  # Image assets
└── files/                   # Document files (PDFs, etc.)
```

## Local Development

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve -l -H localhost

# Access at http://localhost:4000
```

## Deployment

The site is automatically deployed via GitHub Pages. Changes pushed to the `main` branch will be automatically built and published.
