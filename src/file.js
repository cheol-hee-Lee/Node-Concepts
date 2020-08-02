const fs = require('fs');

const contents ='hello\nbye\n안녕';
fs.writeFile('./message.txt', contents, (err)=> {
    if (err) throw err
    console.log('the file has been saved')
});

const data = fs.readFile('./message.txt','utf8', (err,data) => {
    if (err) throw err
    console.log('data 받아왔다')
    console.log(data)
})

