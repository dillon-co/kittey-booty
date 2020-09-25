const  { app, BrowserWindow, remote, ipcMain } = require('electron')
const { PythonShell } = require('python-shell');
const { spawn, exec } = require("child_process");

let win;
let python_path;

function createWindow () {
  win = new BrowserWindow({
    width: 900,
    height: 900,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/jpg-to-png/assets/icons/png/logo.png`,
    webPreferences: { nodeIntegration: true }
  })

  win.loadURL(`file://${__dirname}/dist/jpg-to-png/index.html`)

  win.webContents.openDevTools()

  win.on('closed', function(){
    win = null
  })

  // exec("which python", (error, stdout, stderr) => {
  //   if (error) {
  //     console.log(`error: ${error.message}`);
  //     return;
  //   }
  //   if (stderr) {
  //     console.log(`stderr: ${stderr}`);
  //     return;
  //   }
  //   python_path = stdout;
  //   console.log(stdout);
  // });
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (win === null) {
    createWindow()
  }
})


ipcMain.on('send-files-to-python', (event, arg) => {
  console.log(`args are: ${arg}`)
  counter = 0;
  try{
  // pythonPath: `${python_path}`
  // pythonPath: '/usr/bin/python'
    var options = {
      scriptPath: `${__dirname}/python_scripts/`,
      args: arg,
      pythonPath: '/Users/dilloncortez/anaconda2/bin/python'
    }
    let pyshell = new PythonShell('convert_image.py', options);
    pyshell.on('message', function(message){
      counter += 1
      console.log(counter);
      event.sender.send('conversion-progress', counter)
    })
    // spawn = exec.spawn;
    // process = spawn('python', [`${__dirname}/python_scripts/convert_image.py`, arg], {shell: true})
    // process = exec(`python ${__dirname}/python_scripts/convert_image.py`, [arg], (error, stdout, stderr) => {
    //   if(stdout){
    //     console.log(data)
    //     counter += 1
    //     event.sender.send('conversion-progress', counter)
    //   }
    //   if (error) {
    //      console.log(`error: ${error.message}`);
    //      return;
    //    }
    //    if (stderr) {
    //      console.log(`stderr: ${stderr}`);
    //      return;
    //    }
    //   })
    // process = exec(`python ${__dirname}/python_scripts/convert_image.py ${arg}`)
    // process.stdout.on('data', data =>{
    //   console.log(data)
    //   counter += 1
    //   event.sender.send('conversion-progress', counter)
    // })
  }
  catch(err){
    console.log(err);
  }
})
