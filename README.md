# TWAIS Website

This is the official website for TWAIS, built with [Hugo](https://gohugo.io/).

## Prerequisites

You need to have Go and Hugo installed on your machine.

### macOS (Homebrew)
```bash
brew install hugo
```

### Linux

#### Snap (Recommended)
```bash
sudo snap install hugo
```

#### Debian/Ubuntu
```bash
sudo apt-get install hugo
```

## Running Locally

To start the development server:

```bash
hugo server
```

The site will be available at `http://localhost:1313`.

## Project Structure

- `content/`: Markdown content for pages
- `themes/twais/`: Custom theme files (layout and styles)
- `hugo.toml`: Main configuration file
