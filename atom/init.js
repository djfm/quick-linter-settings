```javascript

const path = require('path');
const os = require('os');
const electron = require('electron');

const pathToDevToolsExtention = path.join(
  os.homedir(),
  // Get the hash from chrome://extensions
  // and the rest from digging.
  // The URL sould point to the directory witk manifest.json.
  '.config/google-chrome-unstable/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0/'
);

electron
  .webFrame
  .registerURLSchemeAsPrivileged(
    'chrome-extension'
  );
  
electron
  .remote
  .BrowserWindow
  .addDevToolsExtension(pathToDevToolsExtention);
  
 ```
