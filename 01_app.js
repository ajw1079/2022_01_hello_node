//console.log('Hello');

const http = require('http');  //<script src=""></script> ==> 외부 모듈로부터 스크립트를 가져와서 연동한다.

const hostname = '127.0.0.1';  //localhost
const port = 3000;  //지정된 포트번호

const server = http.createServer((req, res) => {  //서버에 요청이 들어오면 CB 실행
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

//서버의 생성
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});