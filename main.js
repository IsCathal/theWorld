// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  // Dynamically import electron-is-dev (an ES Module)
  const { default: isDev } = await import('electron-is-dev');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  const devURL = 'http://localhost:3000';
  const prodURL = `file://${path.join(__dirname, 'build', 'index.html')}`;
  win.loadURL(isDev ? devURL : prodURL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
