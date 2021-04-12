const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const bcrypt = require('bcrypt');
const moment = require('moment');
const Store = require('./store');
const { sequelize, User } = require('../data/models');

const store = new Store({
  configName: 'user-config',
  defaults: {
    windowSize: { width: 1024, height: 800 },
    userInfo: {
      login: false,
      user: null,
      name: null
    }
  }
});

sequelize.authenticate()
  .then(() => { console.log('conection successful'); })
  .catch(err => { console.log(`Error: ${err}`); });

async function createWindow() {
  let { width, height } = store.get('windowSize');
  const userInfo = store.get('userInfo');
  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: true
    }
  });

  win.on('resize', () => {
    let { width, height } = win.getBounds();
    store.set('windowSize', { width, height });
  });
  if (userInfo.remeber) {
    const user = await User.findOne({ where: { uuid: userInfo.uuid } });
    if (user && moment().format() <= userInfo.validate) {
      console.log('entrou');
      win.loadFile(path.join(__dirname, '..', 'src', 'index.html'));
      return;
    }
  }
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
  if (bcrypt.compareSync(userInfo.pass, user.password)) {
    const userData = {
      ...user.dataValues,
      id: undefined,
      password: undefined,
      login: true,
      remeber: userInfo.remeber,
      // validate: moment().add(7, 'd').format()
      validate: moment().add(1, 'm').format()
    }
    store.set('userInfo', userData);
    event.returnValue = userData;
  }
  else {
    store.set('userInfo', { login: false });
    event.returnValue = { login: false };
  }
});