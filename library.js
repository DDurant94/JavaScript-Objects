function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.displayInfo = function() {
  console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

Book.prototype.about = function(){
  console.log(this.title + " was wrote by " + this.author + ".");
}

function addBook(title, author, pages) {
  const newBook = new Book(title, author, pages);
  library.push(newBook);
  console.log(`${title} has been added to library database`);
}

function searchBooks(search) {
  return library.filter(book => book.title.includes(search) || book.author.includes(search));
}

const library = [];

addBook("The Lord of the Rings", "J.R.R. Tolkien", 1077,);

const results = searchBooks("The Lord of the Rings");
results.forEach(book => book.displayInfo());
