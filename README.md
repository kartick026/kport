# Kartick's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my work as a full-stack developer and AI enthusiast, featuring a clean design inspired by Tobias Ahlin's editorial style and Adham Dannaway's clarity.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Fluid type scale with clamp() and CSS variables
- **Performance Optimized**: Image optimization, code splitting, and SEO
- **Accessibility**: Semantic HTML, keyboard navigation, and reduced motion support
- **Interactive Animations**: Framer Motion with prefers-reduced-motion fallbacks
- **Project Showcase**: Dynamic project pages with detailed case studies
- **Contact Form**: Integrated contact form with honeypot protection

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Styling & Design
- **Inter Font** - Primary typeface for UI
- **JetBrains Mono** - Monospace font for code
- **Fluid Typography** - Responsive text scaling with clamp()
- **CSS Variables** - Consistent theming and spacing
- **Dark Mode** - Automatic theme switching

### SEO & Performance
- **next-seo** - SEO optimization
- **next-sitemap** - Automatic sitemap generation
- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Static Generation** - Pre-rendered pages for optimal performance

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (pages)/           # Route groups
│   │   ├── projects/          # Project pages
│   │   │   └── [slug]/        # Dynamic project routes
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── experience/        # Experience page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   └── error.tsx          # Error page
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── animated-section.tsx
│   │   ├── callout.tsx
│   │   ├── code.tsx
│   │   ├── figure.tsx
│   │   ├── footer.tsx
│   │   ├── metric.tsx
│   │   └── navbar.tsx
│   ├── content/              # Content files
│   │   └── projects/         # Project MDX files
│   ├── lib/                  # Utility functions
│   │   └── utils.ts
│   └── types/                # TypeScript type definitions
│       └── index.ts
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Typography
- **Fluid Scale**: Responsive text sizing using clamp()
- **Consistent Rhythm**: Vertical spacing with CSS variables
- **Font Pairing**: Inter (UI) + JetBrains Mono (code)

### Color Palette
- **Primary**: Blue accent (#3b82f6)
- **Neutral**: Grayscale with dark mode support
- **Semantic**: Success, warning, error states

### Components
- **Cards**: Elevated containers with hover effects
- **Badges**: Technology tags and status indicators
- **Buttons**: Multiple variants with consistent styling
- **Metrics**: Key performance indicators display

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with split layout
- Featured projects showcase
- Skills overview
- Experience teaser

### Projects (`/projects`)
- Project listing with filters
- Technology-based filtering
- Project cards with metrics

### Project Details (`/projects/[slug]`)
- Detailed case studies
- Technical implementation
- Results and impact metrics
- Technology stack display

### Experience (`/experience`)
- Professional timeline
- Quantified achievements
- Technology usage
- Education background

### About (`/about`)
- Personal story
- Skills breakdown
- Interests and hobbies
- Contact information

### Contact (`/contact`)
- Contact form with validation
- Social media links
- Response time information
- Collaboration interests

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: WebP/AVIF formats with lazy loading
- **Code Splitting**: Route-based bundle optimization
- **Static Generation**: Pre-rendered pages for fast loading

## ♿ Accessibility

- **Semantic HTML**: Proper landmark elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: WCAG AA compliant

## 🔧 Customization

### Adding New Projects

1. Create a new project object in `/src/app/projects/[slug]/page.tsx`
2. Add the project slug to the `generateStaticParams` function
3. Include project metadata and content

### Styling Changes

- Modify CSS variables in `/src/app/globals.css`
- Update Tailwind configuration in `tailwind.config.ts`
- Customize component variants in `/src/components/ui/`

### Content Updates

- Update personal information in page components
- Modify experience data in `/src/app/experience/page.tsx`
- Adjust skills in `/src/app/about/page.tsx`

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Fluid Typography**: Scales smoothly across devices
- **Touch Friendly**: Appropriate touch targets

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

## 📧 Contact

- **Email**: kartick026@gmail.com
- **GitHub**: [github.com/kartick026](https://github.com/kartick026)
- **LinkedIn**: [linkedin.com/in/kartick026](https://linkedin.com/in/kartick026)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Kartick