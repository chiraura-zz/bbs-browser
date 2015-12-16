const packager = require('electron-packager');  
const config = require('./package.json');

packager({  
  dir: './',          // 対象
  out: './dist',      // 出力先
  name: config.name,  // 名前
  platform: 'win32', // win32, darwin
  arch: 'x64',        // 64bit
  version: '0.36.0',  // electron のバージョン
  icon: './app.icns', // アイコン

  'app-version': config.version,          // バージョン

  overwrite: true,  // 作成先の上書き
  asar: true,       // アーカイブ
  prune: true,
  // 無視ファイル
  ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
}, function done (err, appPath) {
  if(err) {
    throw new Error(err);
  }
  console.log('Done!!');
});