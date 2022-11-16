/******** global init *******/
const port = 3000;
const express = require('express');
const app = express();
const _ = require('lodash');


const books = [
  {id: 1, name: '별주부전', content: '거북이가 용왕을... '},
  {id: 2, name: '홍길동전', content: '아버지를 아버지라... '},
  {id: 3, name: '심청전', content: '임당수에 몸을 던져... '},
  {id: 4, name: '콩쥐팥쥐전', content: '콩쥐가 뻘짓을... '},
  {id: 5, name: '춘향전', content: '그네 타다가 눈맞았네... '},
];

/******** router init *******/
app.get('/', (req, res, next) => {
  res.send('/ 입니다.');
});
app.get('/test', (req, res, next) => {
  res.send('/test 입니다.');
});

//[Query를 사용한 방식]
app.get('/book', (req, res, next) => {
  const id = req.query.id;  // http://127.0.0.1:3000/book?id=1
  res.status(200).json(id ? books.filter(v => v.id == id) : books);
});


//[Query를 사용한 방식 - 각 데이터에서 정확하게 정해지지 않은 값. 예를 들어 질의와 같은 정해지지 않은 값의 요청시 사용]
app.get('/search', (req, res, next) => {
  const q = req.query.q;  // http://127.0.0.1:3000/search?q=찾는단어
  if(!q){  //검색어가 없다면
    res.status(200).json([]);  //빈배열 데이터를 보여주기
  }else{  //검색어가 있다면
    res.status(200).json(books.filter(v => v.name.includes(q) || v.content.includes(q)));
  }
});
//[구글 엔진에서의 검색어로 찾기]
//[content 기준으로 찾기]  http://127.0.0.1:3000/search?q=그네
//[name 기준으로 찾기]     http://127.0.0.1:3000/search?q=심청


//[Sementic URL(간편 URL)을 사용한 방식 - 각 데이터를 확실하게 구분할 수 있는 정해진 값이 있는 경우 사용]
app.get('/book/:id', (req, res, next) => {
  const id = req.params.id;  // http://127.0.0.1:3000/book/1 만 가능
  res.status(200).json(id ? books.filter(v => v.id == id) : books);
});

//[Sementic URL(간편 URL)을 사용한 방식 - 각 데이터를 확실하게 구분할 수 있는 정해진 값이 있는 경우 사용]
app.get(['/book', '/book/:id'], (req, res, next) => {
  const id = req.params.id;  // http://127.0.0.1:3000/book 또는 http://127.0.0.1:3000/book/1 모두 가능함
  res.status(200).json(id ? books.filter(v => v.id == id) : books);
});

//[Sementic + Query 함께 사용]
app.get('/update/:id', (req, res, next) => {
  const id = req.params.id;
  const remove = Boolean(req.query.remove);  //형변환(Casting)
  if(remove){
    books.splice(_.findIndex(books, v => v.id == id), 1);  //삭제 시킬 대상을 찾는다.
  }
  res.status(200).json(books);
});
//http://127.0.0.1:3000/update/3?remove=true 처럼 동시 사용시


/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) });