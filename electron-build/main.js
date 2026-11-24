const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// Güvenlik: navigasyon kısıtlaması
app.on('web-contents-created', (_, contents) => {
  contents.on('will-navigate', (event, url) => {
    // Sadece yerel dosyaya izin ver
    if (!url.startsWith('file://')) event.preventDefault();
  });
  contents.setWindowOpenHandler(() => ({ action: 'deny' }));
});

function createWindow() {
  const win = new BrowserWindow({
    width:  1280,
    height: 800,
    minWidth:  480,
    minHeight: 320,
    title: 'KANDİL BODRUMU',
    backgroundColor: '#050b08',
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration:    false,
      contextIsolation:   true,
      sandbox:            true,
    },
    // Başlangıçta tam ekran gibi görün
    show: false,
  });

  // Menü çubuğunu sade tut
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'Oyun',
      submenu: [
        { label: 'Yeniden Başlat',  accelerator: 'F5',  click: () => win.reload() },
        { label: 'Tam Ekran',       accelerator: 'F11', click: () => win.setFullScreen(!win.isFullScreen()) },
        { type: 'separator' },
        { label: 'Çıkış',          accelerator: 'Alt+F4', click: () => app.quit() },
      ],
    },
    {
      label: 'Görünüm',
      submenu: [
        { label: 'Yakınlaştır',     accelerator: 'CmdOrCtrl+Equal', role: 'zoomIn'  },
        { label: 'Uzaklaştır',      accelerator: 'CmdOrCtrl+Minus', role: 'zoomOut' },
        { label: 'Sıfırla',         accelerator: 'CmdOrCtrl+0',     role: 'resetZoom' },
      ],
    },
  ]));

  win.once('ready-to-show', () => {
    win.show();
    // Geliştirme modunda DevTools aç
    if (process.argv.includes('--dev')) win.webContents.openDevTools();
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));

  // F11 ile tam ekran
  win.webContents.on('before-input-event', (_, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
