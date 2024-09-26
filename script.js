const myLibrary = [ 
    {title: "The Outsider", author: "Albert Camus", sites: 159, read: true},
    {title: "The Brothers Karamasow", author: "Fjodor Dostojewski", sites: 1064, read: true},
    {title: "Buddenbrooks", author: "Thomas Mann", sites: 768, read: false},
  ];

//project library on cards 
const cardContent = document.getElementsByClassName("content");

function getBooksOnCards() {
  let j = 0;
    for (let i=0; i<myLibrary.length; i++) {
    
        const books = myLibrary[i];
        for (let key in books) {
            cardContent[j].textContent = `${books[key]}`; j++ 
        };    
    };
};
getBooksOnCards();

// the Book-constructor
function Book(title, author, sites, read) {
  this.title = title;
  this.author = author;
  this.sites = sites;
  this.read = read;
}

// "Show the dialog" button opens the <dialog> modally
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const sitesInput = document.getElementById("sitesInput");
const readInput = document.getElementById("readInput");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const lastCard = document.getElementById("lastCard");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  newBook = new Book(titleInput.value, authorInput.value, sitesInput.value, readInput.value);
  myLibrary.push(newBook);
  favDialog.close(newBook);
  const originalCard = document.querySelector(".card");
  const newCard = originalCard.cloneNode(true);
  lastCard.insertAdjacentElement("afterend",newCard);
  getBooksOnCards();
  favDialog.querySelector("form").reset();
});
