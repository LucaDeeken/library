const myLibrary = [ 
    {title: "The Outsider", author: "Albert Camus", sites: 159, read: "Yes"},
    {title: "The Brothers Karamasow", author: "Fjodor Dostojewski", sites: 1064, read: "No"},
    {title: "Buddenbrooks", author: "Thomas Mann", sites: 768, read: "Yes"},
  ];

//shiw library on cards 
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
const outerContainer = document.getElementById("outerContainer");
let readButton = document.querySelectorAll(".readButton");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

//function to toggle between Yes and No (Read-Status)
function readButtonClicked() {
  const clickedButton = event.target;
  const clickedButtonIndex = clickedButton.dataset.index;
  console.log(clickedButtonIndex);
  const bookCard = document.querySelector(`[data-index="${clickedButtonIndex}"]`);
  const bookIndex = bookCard.dataset.index;
  const book = myLibrary[bookIndex];

    if (clickedButtonIndex === bookIndex) {
      if (book.read === "Yes") {
        delete book.read;
        newRead = "No";
        book.read = newRead;
      } else {
        delete book.read;
        newRead = "Yes";
        book.read = newRead;
      }
      getBooksOnCards();
    }
  };

//add new Object to a new Card-Container
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let readInput = document.getElementById("readInput").checked;
  readInput = readInput ? "Yes" : "No";
  newBook = new Book(titleInput.value, authorInput.value, sitesInput.value, readInput);
  myLibrary.push(newBook);
  favDialog.close(newBook);
  const newCard = lastCard.cloneNode(true);
  newCard.setAttribute('data-index', myLibrary.length - 1);
  outerContainer.appendChild(newCard);
  getBooksOnCards();
  favDialog.querySelector("form").reset();
  const readButton = newCard.querySelector(".readButton");
  readButton.setAttribute('data-index', myLibrary.length - 1);
  readButton.addEventListener("click", (event) => {
    readButtonClicked();   
  });
});

//Add EventListener to readButtons
  readButton.forEach(readButton => {
    readButton.addEventListener("click", (event) => {
      readButtonClicked();
    });
  });
