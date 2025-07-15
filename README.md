# React + Vite + Electron Boilerplate

This repository provides a boilerplate for building cross-platform desktop applications with **React**, **Vite**, and **Electron**. It combines Vite's fast development server and Hot Module Replacement (HMR) with Electron for desktop app development.

## Features

- **React**: A modern JavaScript library for building user interfaces.
- **Vite**: A next-generation frontend tooling with fast builds and HMR.
- **Electron**: Enables cross-platform desktop app development.
- **ESLint**: Configured for code quality and consistency.
- **Custom Port**: Vite server runs on port `6969` for development.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/supremed3v/react-vite-electron-boilerplate.git
   cd react-vite-electron-boilerplate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the app in development mode with Vite's dev server and Electron:

1. Start the development server and Electron:
   ```bash
   npm start
   ```
   This uses `concurrently` to run both the Vite dev server (`http://localhost:6969`) and Electron simultaneously.

### Production Build

To create a production build:

1. Build the Vite app:
   ```bash
   npm run build
   ```
   This generates static files in the `dist` folder.
2. Run the Electron app with the production build:
   ```bash
   set NODE_ENV=production && npm start
   ```

### Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the React app for production.
- `npm run lint`: Runs ESLint to check code quality.
- `npm run preview`: Previews the Vite production build.
- `npm start`: Runs Vite and Electron concurrently for development.

## Project Structure

- `public/electron.cjs`: The Electron main process file, which sets up the desktop window and loads the Vite dev server or built files.
- `src/`: Contains the React application source code.
- `vite.config.js`: Configures Vite, including the React plugin and custom port (`6969`).
- `package.json`: Defines dependencies, scripts, and the main entry point (`public/electron.cjs`).

## ESLint Configuration

The project includes ESLint with the following plugins:

- `@eslint/js`: Core ESLint rules.
- `eslint-plugin-react-hooks`: Enforces React Hooks rules.
- `eslint-plugin-react-refresh`: Ensures Fast Refresh compatibility with Vite.

To expand ESLint for production or TypeScript:

- Consider integrating TypeScript with the [React + TypeScript Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
- Add `typescript-eslint` for type-aware linting:
  ```bash
  npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
  ```

## Plugins

This project uses:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Uses Babel for Fast Refresh.
- Alternatively, you can switch to [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) for faster compilation with SWC.

## Notes

- The Electron main process (`public/electron.cjs`) is set to load `http://localhost:6969` during development. For production, it loads the built `index.html` from the `dist` folder.
- Ensure `nodeIntegration: false` and `contextIsolation: true` in `electron.cjs` for security, unless your app requires Node.js in the renderer process.
- If you encounter issues with the `electron` command, ensure it’s installed locally (`npm install electron --save-dev`) or globally (`npm install -g electron`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.
