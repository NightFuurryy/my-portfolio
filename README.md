# 🐉 Nightfurry Portfolio

A cinematic, dark-themed portfolio landing page for Nightfurry - a passionate full-stack developer, cloud engineer, networking specialist, and BSIT part-time instructor. Built with React, Tailwind CSS, TypeScript, and Vite.

**Live Demo:** [Nightfurry Portfolio](https://ff1850f8c1b445d1a8f9-main.builderio.xyz/)

---

## ✨ Features

- **Dark Cinematic Design** - Toothless-inspired aesthetic with glowing cyan accents and animated backgrounds
- **Responsive** - Fully optimized for desktop, tablet, and mobile devices
- **High-Performance** - Built with Vite for instant hot reload and optimized production builds
- **Smooth Animations** - Floating particles, gradient shifts, glowing effects, and smooth transitions
- **Glass Morphism UI** - Modern glassmorphism panels with backdrop blur effects
- **Accessible** - Semantic HTML and ARIA-friendly navigation
- **TypeScript** - Full type safety throughout the codebase

---

## 📋 Portfolio Sections

### 1. **Hero Section**
- Brand name "Nightfurry" with animated gradient text
- Rotating role display (Frontend Developer, Backend Developer, CloudStack Engineer, Networking Specialist, BSIT Instructor)
- Call-to-action buttons: "View Projects" and "Contact Me"
- Social media links (GitHub, LinkedIn, Email)
- Animated background with glowing cyan atmosphere

### 2. **About Section**
- Professional bio highlighting expertise in frontend, backend, cloud infrastructure, and networking
- Information about teaching at the university level
- Personal philosophy on clean design and practical solutions

### 3. **Skills Section**
Three-column skill showcase:
- **Frontend:** React, Next.js, Tailwind CSS, JavaScript
- **Backend:** Node.js, APIs, Databases, Express
- **Cloud & Networking:** CloudStack, Linux, Networking, Server Management

### 4. **Featured Projects**
Four showcase projects with tech stack tags:
- **Immersive Web Experience** - Interactive digital platform with cinematic animations
- **Cloud Infrastructure Platform** - Scalable cloud management with real-time monitoring
- **Enterprise Networking Solution** - Advanced network design with IP addressing, subnetting, VLAN tagging, and trunk configuration
- **Full-Stack Application** - Complete web solution from frontend to backend

Each project card includes GitHub and Live Demo links.

### 5. **Experience Timeline**
Professional experience displayed as timeline cards:
- Frontend Developer - My Environment (2025 - 2026)
- Backend Developer - My Own (2022 - 2023)
- CloudStack Engineer - CSU INC. (2026 - Present)
- Networking Specialist - Network Solutions (2020 - 2021)
- BSIT Instructor - Benedicto College (2025 - Present)

### 6. **Contact Section**
- Elegant contact form (Name, Email, Message)
- Cyan glowing submit button
- Social media links footer
- Ready for email integration

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **pnpm** v10+ (`npm install -g pnpm@10`)
- **VS Code** ([Download](https://code.visualstudio.com/))

### Installation

1. **Clone or open the project**
   ```bash
   cd nightfurry-portfolio
   code .
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Open http://localhost:5173 in your browser

4. **Build for production**
   ```bash
   pnpm build
   ```

---

## 📁 Project Structure

```
nightfurry-portfolio/
├── client/                          # Frontend React application
│   ├── pages/
│   │   ├── Index.tsx               # Main portfolio landing page
│   │   └── NotFound.tsx            # 404 error page
│   ├── components/
│   │   └── ui/                     # Pre-built UI component library
│   ├── App.tsx                     # App routing and configuration
│   ├── global.css                  # Global styles, theme colors, animations
│   └── index.html                  # HTML entry point
├── server/                          # Express backend (optional)
│   ├── index.ts                    # Server configuration
│   └── routes/                     # API endpoints
├── shared/                          # Shared types
│   └── api.ts                      # API interfaces
├── tailwind.config.ts              # Tailwind CSS configuration
├── vite.config.ts                  # Vite bundler configuration
├── tsconfig.json                   # TypeScript settings
├── package.json                    # Dependencies and scripts
└── README.md                        # This file
```

---

## 🎨 Customization Guide

### Edit Hero Section
**File:** `client/pages/Index.tsx` (Lines ~136-165)

```tsx
// Change brand name
<h1>Your Brand Name</h1>

// Update tagline
<p>Your tagline here</p>

// Modify CTA buttons
<a href="#projects">Your Button Text</a>
<a href="#contact">Your Button Text</a>
```

### Update About Bio
**File:** `client/pages/Index.tsx` (Lines ~203-215)

Replace the paragraph text with your professional bio.

### Customize Skills
**File:** `client/pages/Index.tsx` (Lines ~19-22)

```tsx
const skills = {
  frontend: ['Your', 'Frontend', 'Skills'],
  backend: ['Your', 'Backend', 'Skills'],
  cloud: ['Your', 'Cloud', 'Skills']
};
```

### Add/Edit Projects
**File:** `client/pages/Index.tsx` (Lines ~23-51)

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourlink',
    demo: 'https://your-demo-link.com'
  }
];
```

### Update Experience
**File:** `client/pages/Index.tsx` (Lines ~54-60)

```tsx
const experience = [
  { role: 'Your Role', company: 'Company Name', period: '2023 - Present' }
];
```

### Change Theme Colors
**File:** `client/global.css` (Lines ~14-63)

```css
:root {
  --background: 220 13% 5%;        /* Dark background (HSL) */
  --foreground: 0 0% 95%;          /* Text color */
  --primary: 185 100% 50%;         /* Cyan accent */
  --cyan-light: 186 100% 69%;      /* Glow color */
}
```

**HSL Format:** `hue saturation% lightness%`
Use [this color picker](https://www.rapidtables.com/web/color/hsl-color.html) to find HSL values.

### Update Navigation Links
**File:** `client/pages/Index.tsx` (Line ~93)

```tsx
{['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(...)}
```

### Change Logo & Brand Identity
**File:** `client/pages/Index.tsx` (Lines ~85-90)

```tsx
// Update logo image
<img src="your-logo-url" alt="Your Brand" />

// Update brand name
<span>Your Brand Name</span>
```

### Modify Social Links
**File:** `client/pages/Index.tsx` (Lines ~187-200 and ~380-395)

```tsx
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="mailto:your@email.com">Email</a>
```

---

## 🎬 Animation Classes

The portfolio includes several custom animations:

| Class | Effect |
|-------|--------|
| `animate-float` | Gentle floating up/down motion |
| `animate-float-slow` | Slower floating animation |
| `animate-drift` | Drifting movement in multiple directions |
| `animate-gradient-shift` | Gradient background animation |
| `animate-glow-pulse` | Pulsing glow effect |

---

## 🛠️ Available Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm typecheck

# Run unit tests
pnpm test

# Format code with Prettier
pnpm format.fix
```

---

## 📦 Tech Stack

- **Frontend:** React 18, TypeScript, React Router 6
- **Styling:** Tailwind CSS 3, Custom CSS animations
- **Build Tool:** Vite 8
- **Backend:** Express 5 (optional)
- **UI Library:** Radix UI, Lucide React icons
- **Testing:** Vitest
- **Package Manager:** pnpm

---

## 🚢 Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `pnpm build`
6. Publish directory: `dist`
7. Deploy!

### Deploy to Vercel
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects settings
6. Click "Deploy"

### Deploy to Other Platforms
```bash
# Build the project
pnpm build

# The 'dist' folder contains your optimized site
# Upload to: AWS S3, Azure, DigitalOcean, etc.
```

---

## ⌨️ VSCode Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Quick file open |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+/` | Toggle comment |
| `Ctrl+H` | Find and replace |
| `Ctrl+`` | Toggle terminal |
| `Ctrl+Shift+E` | File explorer |
| `Alt+Up/Down` | Move line up/down |
| `F12` | Go to definition |

---

## 📝 Component Locations

Quick reference for editing specific sections:

| Component | File | Lines |
|-----------|------|-------|
| Navigation | `Index.tsx` | 81-124 |
| Hero Section | `Index.tsx` | 128-182 |
| About Section | `Index.tsx` | 197-218 |
| Skills Section | `Index.tsx` | 220-263 |
| Projects Section | `Index.tsx` | 276-325 |
| Experience Section | `Index.tsx` | 328-348 |
| Contact Section | `Index.tsx` | 351-405 |
| Global Styles | `global.css` | All |
| Theme Config | `tailwind.config.ts` | All |

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
rm -rf node_modules
pnpm install
pnpm dev
```

### Styles Not Updating
- Save the file (Ctrl+S)
- Clear browser cache (Ctrl+Shift+Delete)
- Check VSCode terminal for CSS errors

### TypeScript Errors
```bash
pnpm typecheck
# In VSCode: Ctrl+Shift+P > "TypeScript: Reload Projects"
```

### Port 5173 Already in Use
```bash
# Windows
netstat -ano | findstr :5173

# Mac/Linux
lsof -i :5173
```

---

## 🔗 Useful Resources

- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite Guide:** https://vitejs.dev
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **VSCode Tips:** https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- **Lucide Icons:** https://lucide.dev

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

## 👤 About Nightfurry

A passionate full-stack developer with expertise in:
- Frontend development (React, Next.js, Tailwind CSS)
- Backend development (Node.js, Express, Databases)
- Cloud infrastructure (CloudStack, Linux, Server Management)
- Networking (IP Addressing, Subnetting, VLAN Configuration)
- Teaching and mentoring (BSIT Part-Time Instructor)

Focused on building clean, functional, and user-friendly digital experiences with maintainable code and practical solutions.

---

**Last Updated:** 2025

**Made with ❤️ for Nightfurry Portfolio**
