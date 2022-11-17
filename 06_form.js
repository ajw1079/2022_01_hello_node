/******** global init *******/
const port = 3000;
const express = require('express');
const app = express();


/******** middleware *******/
// post 빙식 중 application/json 방식을 처리한다.
app.use(express.json());
// post 빙식 중 application/x-www-urlencoded 방식을 처리한다.
app.use(express.urlencoded({ extended:false }));  //QueryString의 확장을 막는다. 
//form 태그에서 post 방식으로 전송했을 때 내부의 값은 문자열로 가져온다. 이 경우에는 객체로 보내지는 방식은 아님 (단, 라디오 버튼의 경우)
//문자열 전송이 아닌 배열의 경우 true로 받아야 함(일반적으로 사용하지 않음)



/******** router init *******/
app.use('/', express.static('./public'));  
//public 폴더에 index.html이 없다면 아래의 구문으로 이동한다. 있다면 index.html을 보여준다.
app.get('/', (req, res, next) => {
  //req.params.id (/book/:id)
  //req.query.id (/book?id=2)
});

app.post('/book', (req, res, next) => {
  //req.body (type : application/json) ==> axios.post('/book', {params: {id:2, name:'홍길동'}})
  //req.body (type : application/x-www-urlencoded) ==> <form method="post"></form>
  console.log(req.body); 
  res.send('받았음');
});

/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }); 