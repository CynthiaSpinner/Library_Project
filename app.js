class book { //declaring my class
    constructor(id, title, author, read) { //creating my constructor w/ 4 parameters
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class library {
    constructor() {
        this.bookCount = 1;
        this.books = [
            new book (1, "Name of the Wind", "Patrick Rothfuss", true)
        ];

    }
    markRead(checkbox, id) {
        //looping through book array
        this.books.forEach(book => {
            //checking if book id matches parameter
            if (book.id === id) {
                //if matched change book read property to true
                book.read = true;
                //set checkbox to true
                checkbox.checked = true;
                //setting checkbox disabled to true
                checkbox.disabled = true;
            }
        });
    }
    addBook() {
        // selecting input elements (added input fields to html)
        const titleInput = document.getElementById('titleInput');
        const authorInput = document.getElementById('authorInput');
        const readCheckbox = document.getElementById('readCheckbox');

        //getting values
        const title = titleInput.value;
        const author = authorInput.value;
        const read = readCheckbox.checked;

        //creating newbook using the contructor
        const newBook = new book(this.bookCount + 1, title, author, read);

        //creating table row and cells
        const newRow = document.createElement('tr');
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');
        const readCell = document.createElement('td');
        const actionCell = document.createElement('td'); 

        newRow.setAttribute('data-book-id', newBook.id);

        //setting cell content
        titleCell.textContent = newBook.title;
        authorCell.textContent = newBook.author;

        //creating checkbox for read cell
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = newBook.read;
        readCell.appendChild(checkbox);

        //creating remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.setAttribute('data-book-id', newBook.id);

        //adding event listener to remove button
        removeButton.addEventListener('click', () => {
            myLibrary.removeBook(newBook.id);
        });

        actionCell.appendChild(removeButton);

        //appending cells to row
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);
        newRow.appendChild(actionCell);

        //selecting table body array and increment count
        const tableBody = document.querySelector('#table tbody');
        tableBody.appendChild(newRow);

        //adding book to books array and incrementing the count
        this.books.push(newBook);
        this.bookCount++;

        //clearing forms inputs
        titleInput.value = '';
        authorInput.value = '';
        readCheckbox.checked = false;
    }

    removeBook(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            this.bookCount--;

            const tableRow = document.querySelector(`tr[data-book-id="${id}"]`);
            if (tableRow) {
                tableRow.remove();
            }
        }
    }


}
// creating a new instance of my Library class
const myLibrary =new library();

//selecting the add book button
const addBookButton = document.getElementById('addBookButton');

//adding event listener for on click event
addBookButton.addEventListener('click', () => {
    myLibrary.addBook();
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const bookId = parseInt(e.target.getAttribute('data-book-id'));
        myLibrary.removeBook(bookId);
    });

});
console.log("PROJECT:\n==========\n");
