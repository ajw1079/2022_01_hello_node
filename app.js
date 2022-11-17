/******** global init *******/
const port = 3000;
const express = require('express');
const app = express();

const books = [
  {id: 1, name: '별주부전', content: '거북이가 용왕을... '},
  {id: 2, name: '홍길동전', content: '아버지를 아버지라... '},
  {id: 3, name: '심청전', content: '임당수에 몸을 던져... '},
  {id: 4, name: '콩쥐팥쥐전', content: '콩쥐가 뻘짓을... '},
  {id: 5, name: '춘향전', content: '그네 타다가 눈맞았네... '},
];

/******** middleware *******/
// post 빙식 중 application/json 방식을 처리한다.
app.use(express.json());
// post 빙식 중 application/x-www-urlencoded 방식을 처리한다.
app.use(express.urlencoded({ extended:false }));

/******** router init *******/
app.use('/', express.static('./public'));  
app.get('/', (req, res, next) => {
});

app.post('/book', (req, res, next) => {
  console.log(req.body); 
  const { name, content } = req.body;
  const id = books[books.length - 1].id + 1;
  books.push({ id, name, content})
  
  //res.status(200).json(books);  //json 방식으로 보여준다.
  res.status(200).redirect('/books/list.html'); 


});

/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }); 