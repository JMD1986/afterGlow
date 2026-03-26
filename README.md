
# afterGlow

A modern React + Vite web app for the Afterglow immersive event experience.

## Features

- Built with React 19 and Vite for fast development and production builds
- TypeScript support for strong typing and maintainability
- Modular component structure (including event info, survey, music, and more)
- Custom animations and interactive UI
- Ready for static hosting (e.g., GitHub Pages) and dynamic preview (e.g., Render)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

### Deployment

#### Static Hosting (e.g., GitHub Pages)

- The app is configured with `base: "/afterGlow/"` in `vite.config.js` for correct asset paths.
- Deploy using:

	```bash
	npm run deploy
	```

#### Render or Other Node Hosts

- The `start` script is set to:

	```
	vite preview --host 0.0.0.0 --port $PORT
	```

- This ensures the preview server binds to all interfaces, as required by Render.

## Project Structure

- `src/` — Main source code
	- `components/` — React components (including pages and animations)
	- `assets/` — Images and static assets
- `public/` — Public files (e.g., music)
- `server/` — (Optional) Node backend for Twilio SMS integration

## Scripts

- `dev` — Start Vite dev server
- `build` — Build for production
- `preview` — Preview production build
- `deploy` — Deploy to GitHub Pages
- `start` — (for Render) Serve production build on the correct port

## Environment Variables

- No environment variables are required for the frontend.
- If using the server (Twilio), configure `.env` in the `server/` directory.

## License

MIT
