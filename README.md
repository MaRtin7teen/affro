# Affro Project Dashboard

A premium, high-fidelity analytics dashboard built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed for elegance, performance, and clear data visualization.

---

## ✨ Features

- **🚀 Premium Aesthetics**: Modern glassmorphism effects, curated color palettes, and responsive design systems.
- **📊 Advanced Data Visualization**: Custom charts for revenue tracking, customer satisfaction, target vs. reality, and volume analytics.
- **🗺️ Geographic Insights**: Interactive world map with precise continent-specific sales mapping.
- **🌓 Dynamic Theme Support**: Seamless transition between sophisticated Light and Dark modes.
- **⚡ Micro-Animations**: Smooth, gesture-driven animations and orchestration using Framer Motion.
- **📏 Consistent Layout**: Unified grid system ensuring perfect alignment and horizontal consistency across all rows.

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Mapping** | [React Simple Maps](https://www.react-simple-maps.io/) |
| **Utilities** | `clsx`, `tailwind-merge`, `axios` |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaRtin7teen/affro.git
   cd affro
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

## 📐 Implementation Approach

### 1. Unified Grid Layout
The dashboard utilizes a standard **12-column grid** across all major sections. This ensures that even with varying content types (charts, statistics, maps), the horizontal and vertical alignment remains perfectly consistent, creating a "premium" and stable visual experience.

### 2. Modular Component Architecture
- **ChartsGridWrapper**: A high-level HOC that standardizes card styling, padding, and height handling across all dashboard widgets.
- **Theme Orchestration**: A centralized theme management system that updates CSS-in-JS tokens and Tailwind classes simultaneously for perfect dark mode transitions.

### 3. Visual Precision
- **Map Alignment**: Utilized relative aspect-ratio containers for geographic visualizations to ensure that map markers remain accurately positioned on continents regardless of viewport shifts.
- **Bar Chart Fidelity**: Custom bar charts are implemented with layered rendering to provide depth beyond standard charting library defaults.

## 📝 Dependencies Summary

- **framer-motion**: Used for all layout transitions and chart animations.
- **recharts**: Powers the quantitative data visualizations.
- **lucide-react**: Provides the consistent, thin-stroke iconography used throughout.
- **tailwindcss**: Handles all styling via a unified utility-first approach with custom theme extensions.

---

Built with ❤️ by the Affro Team.
