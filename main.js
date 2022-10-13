const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

app.disableHardwareAcceleration();

const isDev = process.env.NODE_ENV !== "development";
const isMac = process.platform == "darwin";

const menu = [
  ...(!isMac
    ? [
        {
          label: "Testers",
          submenu: [
            {
              label: "BIG",
            },
          ],
        },
      ]
    : []),
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        click: () => app.quit(),
        accelerator: "CmdorCtrl+W",
      },
      {
        label: "Dog",
        click: () => console.log("dog"),
        accelerator: "Alt+D",
      },
    ],
  },
];

const emptyMenu = [];

//Function setting up main window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron Skelly",
    width: isDev ? 900 : 450,
    height: 900,
  });

  //   mainWindow.setFullScreen(true);
  //   mainWindow.show();
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // mainWindow.loadURL("http://localhost:3000");
  mainWindow.loadFile(path.join(__dirname, "./src/index.html"));
}

//code to launch app
app.whenReady().then(() => {
  createMainWindow();

  //Implement menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
