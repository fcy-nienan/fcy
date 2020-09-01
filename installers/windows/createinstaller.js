const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'green-release')
  //refers: https://www.christianengvall.se/electron-windows-installer/
  return Promise.resolve({
    appDirectory: path.join(outPath, 'fcyName-win32-x64/'),
    outputDirectory: path.join(outPath, '..','windows-installer'),
    noMsi: false,
    setupMsi: 'fcyMsi.msi',
    setupExe: 'fcyInstaller.exe',
    setupIcon: path.join(rootPath, 'fcy.ico'),
    // iconUrl: path.join(rootPath,'favicon.ico')
  })
}
