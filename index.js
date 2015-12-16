'use strict';

const app = require('app');  
const BrowserWindow = require('browser-window');  

// クラッシュレポート
require('crash-reporter').start();

// メインウィンドウ
let mainWindow = null;

app.on('window-all-closed', function() {  
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {  
  // メイン画面のサイズ
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl(`file://${__dirname}/index.html`);

  // デベロッパーツールを表示
  mainWindow.toggleDevTools();

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});