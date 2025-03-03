# Shaurya Bio - Minimal

A personal bio website built with Next.js 14, TypeScript, and Tailwind CSS.

## How to Edit Content

The main content of the website is stored in `app/page.tsx`. This file is divided into sections that you can modify:

### Editing Instructions

1. **Profile Section**: Update your personal information including profile image, name, title, and social links.
   - Location: Lines ~7-38
   - Replace `/assets/profile.jpg` with your own image (place it in the `public/assets` directory)
   - Update social media links with your own profiles

2. **About Me Section**: Edit your research expertise and professional summary.
   - Location: Lines ~41-52

3. **Experience Sections**: Modify your work experience, publications, and other content sections.
   - Each section follows a similar pattern with a heading and content
   - Maintain the same structure when adding or removing sections

4. **Maintaining Design Consistency**:
   - Keep the Tailwind CSS classes for styling
   - If adding new sections, follow the same pattern as existing ones
   - All styles use the dark theme color palette (gray-800, gray-900, etc.)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to see your changes locally.

## Deployment

This site is configured to deploy to GitHub Pages. Simply push changes to your main branch and the GitHub Action will handle deployment. 