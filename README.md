# Obsidian // Spider-Man Cinematic Engine

A high-fidelity, brutalist web experience built as a cinematic anthology of the Spider-Man multiverse. This project is a functional and visual replication of the **Obsidian Assembly** architecture, repurposed as a technical research playground for advanced motion design and cinematic storytelling.

> [!NOTE]
> This is a personal education project created to test and master high-performance libraries like **GSAP (GreenSock Animation Platform)**, **Lenis (Smooth Scroll)**, and **Next.js 15+**.

## 🚀 The Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Animation**: [GSAP](https://gsap.com/) (ScrollTrigger, Custom Ticker Sync)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (Synced with GSAP for 1:1 motion fidelity)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Typography**: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (Standardized System Terminal aesthetic)
- **Rendering**: Custom "Focus Engine" for depth-based media reveals and circular web-shot masking.

## 🕸️ Key Features

- **Autonomous Hero Video**: High-vibrancy cinematic hero with autonomous playback and technical HUD overlays.
- **Precision Focus Engine**: Scroll-driven media scaling and depth-stacking across 5 layers.
- **Web-Reveal Transitions**: Section transitions utilizing circular `clip-path` masks to simulate web-slinging movement.
- **Technical HUD**: Real-time Manhattan surveillance coordinates, fluctuating frequencies, and network status indicators.
- **SplitText Typography**: React-safe, character-by-character reveals for immersive, system-level legibility.

## 📂 Project Structure

- `src/components/layout/StickyScene.tsx`: The heart of the animation engine.
- `src/components/layout/WebStrands.tsx`: Dynamic SVG multiversal network strands.
- `src/components/layout/SplitText.tsx`: character-reveal typography system.
- `public/assets/`: High-resolution cinematic assets and video stems.

## 👨‍💻 About the Author

This project serves as a technical showcase for my personal education and portfolio. 

- **Portfolio**: [adithyan-portfolio.pages.dev](https://adithyan-portfolio.pages.dev/)
- **GitHub**: [@4dithyan](https://github.com/4dithyan)

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/4dithyan/spiderman_animation_wesbite-.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

---
*Built with precision. With great power comes great scalability.*
