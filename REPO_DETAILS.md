# Repository Details: PrincePanara Portfolio Website

## GitHub Repository
- **URL**: [https://github.com/PrincePanara/portfolio-website.git](https://github.com/PrincePanara/portfolio-website.git)
- **Branch**: main

## Project Concept
This repository contains the source code for a modern, personal portfolio website for Prince Panara. It serves as a showcase for various projects, case studies, skills, and professional experience, highlighting capabilities in UI/UX design, web development, and mobile application development.

## Tech Stack & Framework
- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations/Motion**: Framer Motion (assumed via components like AuroraBackground, GridBackground, MagneticButton, etc.)
- **Deployment**: Vercel (recommended)

## Project Structure
- `app/`: Next.js App Router structure with distinct routes (`/about`, `/projects`, `/contact`, `/skills`, `/case-studies`, `/dashboard`, etc.)
- `components/`: Modular React components grouped logically.
  - `home/`: Sections for the homepage (HeroSection, FeaturedProjects, SkillsPreview, etc.)
  - `layout/`: Global layout components (Navbar, Footer, Sidebar, TopBar)
  - `shared/`: Reusable components (ProjectCard, ThemeToggle, InteractiveAvatar, PrinceCopilot, etc.)
  - `ui/`: Core UI components (blur-fade, typewriter)
  - `motion/`: Animation wrappers
  - `backgrounds/`: Special background effects (Aurora, Grid)
- `data/`: Centralized content data (`projects.ts`, `skills.ts`, `experience.ts`, `testimonials.ts`) which powers the dynamic sections.
- `public/`: Static assets (images, icons, resume PDF).
- `lib/`: Utility functions and Firebase integration.
- `hooks/`: Custom React hooks (e.g., `useMousePosition`).

## Key Features
- **Dynamic Content**: Data is driven by TS files in the `data/` directory, making updates to projects, skills, and experience seamless.
- **Modern Interactions**: Features a custom cursor, scroll progress bar, magnetic buttons, and a splash screen.
- **Projects Showcase**: Highlights key projects such as "Student Work Manager", "HostelHub", "Iceland Hostel", and "MomentRoom".
- **Responsive & Themed**: Fully responsive design with support for light and dark themes.

## Workflow Notes
- Local Development: Run `npm run dev` (runs on port 3000/3002).
- Content Updates: Modify arrays in the `data/` folder to instantly reflect changes across the application without needing to rebuild UI components.
