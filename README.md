# Personal Bio Website

A modern, responsive personal bio website built with Next.js 14, TypeScript, Tailwind CSS, and Radix UI components. This project showcases a clean and professional design while maintaining excellent performance and accessibility.

## 🚀 Features

- Modern UI/UX with Radix UI components
- Responsive design using Tailwind CSS
- Dark/Light theme support
- Type-safe development with TypeScript
- Fast page loads with Next.js 14
- Component-driven architecture
- Accessibility-first approach

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Theme**: Next-themes

## 📦 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌐 Deploying to GitHub Pages

To deploy your website to GitHub Pages, follow these steps:

1. First, create a GitHub repository for your project if you haven't already.

2. Update the `next.config.mjs` file to add your repository name as the base path:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: {
       unoptimized: true,
     },
   }
   ```

3. Create a new file `.github/workflows/deploy.yml` in your project with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - name: Install dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

4. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

5. Push your code to the main branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

6. The GitHub Action will automatically build and deploy your site to GitHub Pages. You can view the deployment progress in the "Actions" tab of your repository.

Your site will be available at: `https://your-username.github.io/your-repo-name`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/your-repo-name/issues).

## 📧 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name) 