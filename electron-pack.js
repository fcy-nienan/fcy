const packager = require('electron-packager');
const {serialHooks} = require('electron-packager/src/hooks')
const path = require('path');
console.info("正在打包")


const options = {
  dir: path.join(__dirname),
  name: 'fcyName',
  overwrite: true,
  platform: 'win32',
  icon: 'fcy.ico',
  // extraResource: [path.join(__dirname, 'dist', 'fcy')],
  out: path.join(__dirname, 'green-release'),
  afterCopy: [serialHooks([(buildPath, electronVersion, platform, arch) => {

  }])]
}

async function bundleElectronApp(options) {
  const appPaths = await packager(options)
  console.log(`打包已经OK: 打包目录为 ${appPaths.join("\n")}`)
}

bundleElectronApp(options)
