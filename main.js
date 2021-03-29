const { app, BrowserWindow } = require('electron');
const path = require('path');
const { sequelize } = require('./data/models');

sequelize.authenticate()
  .then(() => { console.log('conection successful'); })
  .catch(err => { console.log(`Error: ${err}`); });

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(path.join(__dirname, 'src', 'login.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
