// Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    };
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`
    };

    get isAvailable(){
        return this._isAvailable;
    };

    set isAvailable(status) {
        this._isAvailable = status;
    };
};


//Task 2: Create a Section Class

class Section {
    constructor(name){
        this.name = name
        this.books =[];
    }
    addBook(book){
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()}, Available: ${book.isAvailable}`);
             
        });
    }; ///shows what book is available

//Task 5: Handle Books Borrowing and Returning (have to put it here for it to work)

calculateTotalBooksAvailable() {
    return this.books.filter(book => book.isAvailable).length;
    };
};

//Task 3: Create a Patron Class

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks =[];
    }
    borrowBook(book) {
        if (book.isAvailable){
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}"`);
        } else{
            console.log(`"${book.title}" Not Available`);
            
        }
    }    //Logs if able to be borrowed or not
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if(index > -1){
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}"`);
        }else {
            console.log(`${this.name} have not borrowed "${book.title}"`);
        }
    } //Logs if it was returned or if it was not borrowed
};

//Task 4: Create a VIPPatron Class that inherits from Patron

class VIPPatron extends Patron{
    constructor(name, priority) {
        super(name);
        this.priority = priority;
    }
    borrowedBook(book) {
        if (book.isAvailable) {
            book.isAvailable= false;
            this.borrowedBooks.push(book);
            console.log(`VIP ${this.name} borrowed "${book.title}"`);
       } else {
        console.log(`"${book.title}" not available for VIP.`);
       }
    }
}; //Checks if book is available for VIP

//Task 6: Create and Manage Sections and Patrons 

// Create Sections

const fictionSection = new Section('Fiction');
const nonFictionSection = new Section('Non-Fiction');


// Create Books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456789');
const book2 = new Book('1984', 'George Orwell', '987654321');
const book3 = new Book('The Jungle', 'Upton Sinclair', '193038287');
const book4 = new Book('1776', 'David McCullough', '890347821');

// Add Books to Sections
fictionSection.addBook(book1);
fictionSection.addBook(book2);
nonFictionSection.addBook(book3);
nonFictionSection.addBook(book4);

// Create Patrons
const patron1 = new Patron('Hazel');
const patron2 = new Patron('Ricky');
const vipPatron = new VIPPatron('Timmy');

// Borrow Books
patron1.borrowBook(book1);
patron2.borrowBook(book3);
vipPatron.borrowBook(book2);

// Return Books
patron1.returnBook(book1);
vipPatron.returnBook(book2);

// List Books and availability
console.log('Fiction Section Books:');
console.log(fictionSection.listBooks());
console.log('Non-Fiction Section Books:');
console.log(nonFictionSection.listBooks());

// Calculate Total Available Books in Each Section
console.log(`Total available books in Fiction: ${fictionSection.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Non-Fiction: ${nonFictionSection.calculateTotalBooksAvailable()}`);