# React + Vite + Electron Boilerplate

> Production-ready starter for building cross-platform desktop apps with React, Vite, and Electron.

Most Electron boilerplates are either outdated, bloated, or tied to a specific framework version. This one is minimal, fast, and built to extend — not to fight.

---

## Why This Exists

Electron development has a reputation for being painful to set up. Vite's dev server doesn't play nicely with Electron's main/renderer process split out of the box. This boilerplate solves that once, correctly, so you can start building the actual product.

---

## What's Included

- **Electron** — latest stable, with contextBridge and preload script configured
- **React 18** — with full HMR in development via Vite
- **Vite** — fast builds, ES modules, no Webpack
- **TypeScript** — strict mode, paths configured
- **Electron Builder** — pre-configured for Windows, macOS, and Linux builds
- **IPC bridge** — type-safe main ↔ renderer communication out of the box
- **Separate main/renderer processes** — correctly isolated, no `nodeIntegration: true` hacks

---

## Getting Started

```bash
git clone https://github.com/supremed3v/react-vite-electron-boilerplate.git
cd react-vite-electron-boilerplate
npm install
npm run dev        # Start in development with HMR
```

### Build for production

```bash
npm run build          # Compile TypeScript + Vite bundle
npm run dist           # Package into platform installer
```

Outputs to `/dist` — generates `.exe`, `.dmg`, or `.AppImage` depending on your OS.

---

## Project Structure

```
├── electron/
│   ├── main.ts          # Electron main process
│   ├── preload.ts       # Context bridge — safe IPC exposure to renderer
│   └── ipc/             # IPC handlers
├── src/
│   ├── App.tsx          # React app entry
│   ├── components/
│   └── hooks/
├── vite.config.ts       # Vite config with Electron renderer target
└── electron-builder.yml # Build targets: win, mac, linux
```

---

## IPC Pattern (type-safe)

```typescript
// electron/preload.ts — expose to renderer safely
contextBridge.exposeInMainWorld('api', {
  readFile: (path: string) => ipcRenderer.invoke('read-file', path),
  writeFile: (path: string, data: string) => ipcRenderer.invoke('write-file', path, data),
})

// src/hooks/useElectron.ts — consume in React
const { api } = window as any
const content = await api.readFile('/path/to/file')
```

---

## Use This If You're Building

- Internal developer tools
- Local-first productivity apps
- Data pipeline dashboards that need filesystem access
- Any app that needs OS-level APIs (notifications, tray, file system, clipboard)

---

## License

MIT — use it, fork it, ship with it.
