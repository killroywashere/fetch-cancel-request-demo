
/*
Author: Kishin Karra
github: https://github.com/killroywashere
*/

var abortController = null;

signalAborted = () => {
    console.log('Signal Aborted');
}

getBigFile = () => {
    const abortController = new AbortController;
    const abortSignal = abortController.signal;
    fetch('https://mdn.github.io/dom-examples/abort-api/sintel.mp4', {signal: abortSignal}).then((success) => {
        console.log('Request succesful')
    }).catch(error => {
        console.log(`Error = ${error.toString()}`)
        document.getElementById('error').innerHTML = `Error = ${error.message}`
    });
    return abortController;
}

startClicked = () => {
    abortController = getBigFile();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'block';
}

cancelClicked = () => {
    abortController.abort();
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('cancelBtn').style.display = 'none';
}
