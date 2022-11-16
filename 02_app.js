// const moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;

app.listen(port, () => { console.log(`http://${host}:${port}`) });

app.get('/', (req, res) => {
  let { name } = req.query;
  res.status(200).send(`<h1>Hello, ${name || 'Don Joe'}</h1>`)
});

// http://127.0.0.1:3000/ 만 입력하면 기본 값인 "Hello, Don Joe" 출력


// http://127.0.0.1:3000/?name=hong.kd 처럼 기본 URL로부터 ?name=hong.kd를 추가로 입력하면 추가로 정보를 전달해준다. 이 부분을 query로 실어서 요청한다. (Open with LiveServer와 유사한 동작원리)
// "Hello, hong.kd" 출력

app.get('/hello', (req, res) => {
  res.status(200).send(`
    <!doctype html>
    <html lang="ko">
    <head>
      <title>Hello, Node</title>
    </head>
    <body>
      <h1>Hello, Node</h1>
    </body>
    </html>
  `);
});

//http://127.0.0.1:3000/hello 를 입력하면 send() 함수 메서드 내부의 내용을 화면상에 출력한다.
