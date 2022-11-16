/******** global init *******/
const port = 3000;
const express = require('express');
const app = express();


/******** router init *******/
app.use('/', express.static('./public'));  
//public 폴더에 index.html이 없다면 아래의 구문으로 이동한다. 있다면 index.html을 보여준다.
app.get('/', (req, res, next) => {
  res.send('index.html 이 없어요~~!!');
});


/******** server init *******/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }); 