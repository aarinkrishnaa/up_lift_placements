# NetBounce Placement - Frontend

Modern, responsive frontend for NetBounce Placement built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React** 18.3.1 with TypeScript
- **Vite** 6.3.5 - Build tool and dev server
- **Tailwind CSS** 4.1.12 - Styling
- **Material-UI** - Component library
- **Radix UI** - Headless UI components
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **React Router** - Navigation

## Color Theme

- Primary Orange: `#FD6F2F`
- Light Peach: `#FFEAD1`
- Soft Green: `#DCE4B8`
- Dark Forest: `#515739`
- Deep Green: `#2F3E2E`
- Sand Beige: `#E6D5C3`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
refrontend/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Jobs.tsx
│   │   ├── Training.tsx
│   │   └── Contact.tsx
│   ├── lib/            # Utilities
│   ├── assets/         # Static assets
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
└── index.html          # HTML template
```

## Features

- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
- ✅ Modern UI with Tailwind CSS
- ✅ Type-safe with TypeScript
- ✅ Fast development with Vite HMR
- ✅ SEO-friendly routing
- ✅ Accessible components

## Pages

1. **Home** - Hero section, features, stats, testimonials
2. **About** - Company mission, vision, values, story
3. **Services** - All services with detailed descriptions
4. **Jobs** - Job listings with search and filters
5. **Training** - Training programs with enrollment
6. **Contact** - Contact form and information

## Development

The project uses:
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for styling
- Vite for fast builds

## Backend Integration

To connect with the backend API, update the API endpoints in the respective components to point to your backend server (default: http://localhost:5000).

## License

© 2024 NetBounce Placement. All rights reserved.
