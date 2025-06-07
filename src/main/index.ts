import { app, shell, BrowserWindow, ipcMain, globalShortcut } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    fullscreen: true,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  globalShortcut.register('Escape', () => {
    mainWindow!.webContents.send('global-key', 'Escape')
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
      win.loadFile(join(__dirname, '../renderer/index.html'))
    }
  })

  globalShortcut.register('CommandOrControl+Backspace', () => {
    mainWindow!.webContents.send('global-key', 'Ctrl+Backspace')
    const win = BrowserWindow.getFocusedWindow()
    if (win) {
      win.loadFile(join(__dirname, '../renderer/index.html'))
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('load-url', (_event, url: string) => {
    if (mainWindow && url) {
      mainWindow.loadURL(url)
    }
  })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('exit-fullscreen', () => {
  if (mainWindow) {
    mainWindow.setFullScreen(false)
  }
})

ipcMain.on('quit-app', () => {
  app.quit()
})
