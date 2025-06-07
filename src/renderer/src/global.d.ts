export {}

declare global {
  interface Window {
    electronAPI: {
      loadURL: (url: string) => void
      exitFullscreen: () => void
      quitApp: () => void
    }
  }
}
