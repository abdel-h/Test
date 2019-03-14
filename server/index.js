const fs = require('fs');
const filename = 'hosts.txt';

let isGif = filename => {
    return (
        filename.split('.').pop() === 'GIF' ||
        filename.split('.').pop() === 'gif'
    );
};
let grabFileData = data => {
    /// Data example
    // burger.letters.com - - [01/Jul/1995:00:00:11 -0400] "GET /shuttle/countdown/liftoff.html HTTP/1.0" 304 0
    //1. Grab between quotes to get filename from request field
    let fileData = {
        filename: '',
        status: ''
    };
    const regexp = /"(.*?[^\\])"/;
    const filename = data
        .match(regexp)[0]
        .replace('"GET ', '')
        .replace(' HTTP/1.0"', '')
        .split('/')
        .pop();
    //2. Grab request status
    const d = data.split(' ');
    const dL = d.length;
    const status = d[d.length - 2];
    return { ...fileData, filename, status };
};
const lines = fs
    .readFileSync(filename)
    .toString()
    .split('\n');

const f = lines.forEach((line, index) => {
    const filedata = grabFileData(line);
    if (filedata.status === '200' && isGif(filedata.filename)) {
        fs.appendFile('gifs_' + filename, filedata.filename + '\n', err => {
            if (err) throw err;
        });
    }
});
