//정적 HTML : 퍼블리셔가 만든 구조구문을 백엔드 개발자가 그대로 적용한 HTML.
//동적 HTML

/******** global init *******/
const port = 3000;
const express = require('express');
const app = express();

/******** router init *******/
// app.use('/', express.static('./public'));  
// //public 폴더에 index.html이 없다면 아래의 구문으로 이동한다. 있다면 index.html을 보여준다.
// app.get('/', (req, res, next) => {
//   res.send('index.html 이 없어요~~!!');
// });


//******[브라우저에서 서버로 요청(request)시 진행 방법의 설명]**********//
//하나의 요청에 의해 하나의 응답을 기준으로 리턴받는다.

//<< MiddleWare : 주소가 없음 >>
//app.use()는 GET/POST에 가리지 않고 다 받는다.
//http://127.0.0.1/abc로 어떠한 주소가 들어오더라도 무조건 이 부분에서 걸려서 리턴 받는다.
app.use((req, res, next) => {
  //중간처리를 무조건 진행한다. 예를들어 해커들의 침입인지를 구분하는 코드를 작성할 수도 있음
  //res.send('주소 없어요');
  res.james = 'James'
  next();  //당장 리턴을 받지 못하면 다음으로 넘겨라
});

//Static Router : 파일을 찾으면 파일을 응답한다. 
//http://127.0.0.1:3000/html/01_index.html   ===>  public이라는 폴더 내부의 모든 파일을 루트값으로 선언함으로써 URL에 적용할 수 있음
app.use('/', express.static('./public'));  

//GET Router : 주소에 맞으면 응답한다.
app.get('/', (req, res, next) => {
  res.send('index.html 이 없어요~~!!');
});

app.get('/book', (req, res, next) => {
  res.send('/book 입니다.');
});

//POST Router : 주소에 맞으면 응답한다.
app.post('/', (req, res, next) => {
  res.send('POST/book 입니다.');
});

//모든 라우터를 찾았는데 없으면 Error


/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) });