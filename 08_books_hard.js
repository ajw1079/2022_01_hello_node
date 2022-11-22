/******** global init *******/
const port = 3000;
const express = require('express');
const { _ } = require('lodash');
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
// app.get('/', (req, res, next) => {
// });

app.get('/book', (req, res, next) => {
  console.log("실행되는겨?");
  const reverseBooks = books.slice().reverse();
  //res.status(200).json(books.slice().reverse());  //최신순으로 데이터가 들어오도록 반영한다. (slice() 메서드를 활용하여 원본에서 복제를 하여 사용한다.)


  
  let html =  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
      <link rel="stylesheet" href="../css/list.css">
      <script src="https://kit.fontawesome.com/09743b710b.js" crossorigin="anonymous"></script>
      <script src="../js/axios.min.js"></script>
      <script src="../js/promise.polyfill.min.js"></script>
    </head>
    <body>
      <div class="container pt-3">
        <div class="alert alert-primary mb-3 d-flex justify-content-between align-items-center">
          <h3 style="font-size:1.25em;">
            <i class="fa fa-book"></i>&nbsp;도서관리시스템
          </h3>
          <ul class="breadcrumb mb-0">
            <li class="breadcrumb-item active">도서리스트</li>
            <li class="breadcrumb-item"><a href="/book/write.html">도서작성</a></li>
          </ul>
        </div>
    
        <table class="book-tbl table table-striped table-hover text-center border-bottom">
          <thead class="thead-dark">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>`;
  reverseBooks.map((v, i) => {
    html += `
            <tr>
              <td>${v.id}</td>
              <td>${v.name}</td>
              <td>${v.content}</td>
            </tr>\n
    `  
  });      
    html += `
            </tbody>
          </table>
        </div>
        
      </body>
    </html>`;
  console.log(html);
  res.status(200).send(html);

});

app.post('/book', (req, res, next) => {
  console.log(req.body); 
  const { name, content } = req.body;
  const id = books[books.length - 1].id + 1;
  books.push({ id, name, content})
  
  //res.status(200).json(books);  //json 방식으로 보여준다.
  res.status(200).redirect('/book'); 


});

/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }); 