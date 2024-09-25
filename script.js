const myLibrary = [ 
    {title: "The Outsider", author: "Albert Camus", sites: 159, read: true},
    {title: "The Brothers Karamasow", author: "Fjodor Dostojewski", sites: 1064, read: true},
    {title: "Buddenbrooks", author: "Thomas Mann", sites: 768, read: false},
  ];
  
//project library on cards 
const cardContent = document.getElementsByClassName("content");
let j = 0;

for (let i=0; i<myLibrary.length; i++) {

    const books = myLibrary[i];

    for (let key in books) {
        cardContent[j].textContent = `${books[key]}`; j++ 
    }    
}

  function Book() {
    // the constructor...
  }
  
  function addBookToLibrary() {
    // do stuff here
  }
