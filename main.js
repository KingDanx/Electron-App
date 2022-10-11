const path = require("path");
const { app, BrowserWindow } = require("electron");

//Function setting up main window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron Skelly",
    width: 700,
    height: 700,
  });

  mainWindow.loadFile(path.join(__dirname, "./src/index.html"));
}

//code to launch app
app.whenReady().then(() => {
  createMainWindow();
});
