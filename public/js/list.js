axios.get('/book', {}).then(onGetBook).catch(onError)

function onGetBook(r){
  console.log(r);
  let books = r.data;
  let html = '';
  books.forEach( book => {
    html += `
      <tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.content}</td>
      </tr>
    `
  });
  document.querySelector(".book-tbl tbody").innerHTML = html;

}

function onError(err){
  console.log(err);
}