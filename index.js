function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(booksData => {
    renderBooks(booksData)
    
    // Extra code
    renderCharactersForFirstBook(booksData[0].characters)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Extra function
function renderCharactersForFirstBook(characters){
  const div = document.createElement('div')
  
  const title = document.createElement('h1')
  title.textContent = "Characters Section:"
  div.appendChild(title)

  characters.forEach(character => {
    const h1 = document.createElement('h1')
    h1.textContent = character
    div.appendChild(h1)
  })
  document.body.appendChild(div)
}