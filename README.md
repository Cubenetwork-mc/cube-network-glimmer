# Cube Network - Minecraft Server Website

A modern, cyberpunk-themed website for the Cube Network Minecraft server featuring a revolutionary 3D holographic cube logo with particle effects and interactive animations.

## 🌟 Features

- **3D Holographic Logo**: Revolutionary multi-layered 3D cube with particle effects and dynamic lighting
- **Cyberpunk Design**: Dark theme with neon accents, glowing borders, and pixelated fonts
- **Responsive Layout**: Optimized for all devices with smooth animations
- **Interactive Elements**: Hover effects, floating particles, and animated components
- **Modern Stack**: Built with React, TypeScript, Vite, and Tailwind CSS

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL]

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Animations
- **Build Tool**: Vite
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation & Local Development

### Prerequisites
- Node.js 18+ and npm installed - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/cube-network-glimmer.git

# 2. Navigate to project directory
cd cube-network-glimmer

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Fork/Clone this repository** to your GitHub account

2. **Update the repository name** in `vite.config.ts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Wait for deployment**:
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab for deployment status
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/`

### Method 2: Manual Build & Deploy

```bash
# 1. Build the project
npm run build

# 2. Deploy the dist folder to gh-pages branch
npx gh-pages -d dist
```

## 🎨 Customization

### Logo Customization
The 3D holographic cube logo can be customized in:
- `src/components/Hero.tsx` - Logo structure and text
- `src/index.css` - Animations and particle effects
- `tailwind.config.ts` - Color scheme and design tokens

### Design System
- Colors and themes: `src/index.css`
- Component variants: `tailwind.config.ts`
- UI components: `src/components/ui/`

### Content Updates
- Hero section: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Server rules: `src/components/Rules.tsx`
- Store section: `src/components/Store.tsx`

## 📁 Project Structure

```
cube-network-glimmer/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Hero.tsx        # Hero section with 3D logo
│   │   ├── About.tsx       # About section
│   │   ├── Vote.tsx        # Voting section
│   │   ├── Rules.tsx       # Server rules
│   │   ├── Store.tsx       # Store section
│   │   └── Discord.tsx     # Discord section
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── index.css           # Global styles & animations
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
└── dist/                   # Build output (generated)
```

## 🎯 Key Features Explained

### 3D Holographic Logo
- Multi-layered 3D cube with each face displaying letters
- Floating particle effects around the logo
- Dynamic lighting and shadow effects
- Responsive animations that adapt to screen size

### Cyberpunk Theme
- Dark background with neon accent colors
- Glowing borders and hover effects
- Pixelated fonts for authentic Minecraft feel
- Smooth transitions and animations

### Performance Optimized
- Lazy loading for optimal performance
- Optimized animations using CSS transforms
- Responsive design for all devices
- Fast build times with Vite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### White Screen on GitHub Pages
- Ensure the `base` URL in `vite.config.ts` matches your repository name
- Check that GitHub Pages is enabled in repository settings
- Verify the build process completed successfully in GitHub Actions

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Clear cache and rebuild: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (requires 18+)

### Deployment Issues
- Verify GitHub Actions workflow is running
- Check repository permissions for GitHub Pages
- Ensure the `/.nojekyll` file exists in the public directory

## 📞 Support

For issues or questions:
- Create an issue in this repository
- Contact the development team
- Check the troubleshooting section above

---

Made with ❤️ for the Cube Network Minecraft Community
