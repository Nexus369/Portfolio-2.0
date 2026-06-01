# Jasbir Singh - Portfolio

A high-end, interactive personal portfolio website for Jasbir Singh, an Embedded Systems Engineer. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion, this portfolio features smooth scroll animations, 3D tilt effects, magnetic buttons, and a polished dark-themed design.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, and Tailwind CSS v4.
- **Advanced Animations**: Powered by Framer Motion for scroll-based reveals, character-by-character animations, and magnetic UI components.
- **Smooth Scrolling**: Integrated with Lenis for a buttery smooth scrolling experience.
- **Interactive 3D Effects**: Custom tilt components and magnetic hover effects on buttons and images.
- **Responsive Design**: Fluid typography using `clamp()` and fully responsive layouts across mobile, tablet, and desktop devices.
- **Dark Theme Optimized**: Premium dark aesthetic with curated color palettes and smooth gradients.

## 📦 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nexus369/Portfolio-2.0.git
   cd Portfolio-2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the portfolio.

## 📁 Project Structure

```text
src/
├── assets/        # Static assets like images and SVGs
├── components/    # Reusable React components
│   ├── sections/  # Page sections (Hero, About, Projects, etc.)
│   └── ui/        # Animated UI elements (FadeIn, Magnet, Tilt3D, etc.)
├── context/       # React Context providers (Theme Context)
├── lib/           # Utility functions (e.g., tailwind merge)
├── App.tsx        # Main application component
├── main.tsx       # Entry point
└── index.css      # Global styles and Tailwind imports
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
