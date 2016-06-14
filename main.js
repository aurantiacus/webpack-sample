'use strict'

const electron = require('electron')
const { app } = electron
const { BrowserWindow } = electron

let mainWindow = null

console.dir(BrowserWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 310,
    minWidth: 250,
    height: 360,
    minHeight: 100,
    webPreferences: { webSecurity: false }
  })
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null })
})
