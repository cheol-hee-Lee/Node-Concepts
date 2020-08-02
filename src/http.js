const http = require('http');

const server = http.createServer();

server.listen(50000, ()=> {
    console.log('서버가 동작 중, http://127.0.0.1:50000');
})

const serverClose = () => {
    server.close();
    console.log('서버가 종료 중, http://127.0.0.1:50000')
}

setTimeout(serverClose, 2000)
