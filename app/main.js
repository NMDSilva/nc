const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const bcrypt = require('bcrypt');
const { sequelize, User } = require('../data/models');

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

  win.loadFile(path.join(__dirname, '..', 'src', 'login.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    sequelize.close();
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

ipcMain.on('user:login', async (event, userInfo) => {
  
  const user = await User.findOne({ where: { email: userInfo.user } });

  console.log(user.password);
  
  console.log(bcrypt.hashSync(userInfo.pass, 10), userInfo.pass);


  if (user?.password === bcrypt.hashSync(userInfo.pass, 10)) {
    event.returnValue = {
      login: true,
      user: userInfo.user,
      nome: user.name
    };
  }
  else { event.returnValue = { login: false }; }
});