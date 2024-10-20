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
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if(index > -1){
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}"`);
        }else {
            console.log(`${this.name} have not borrowed "${book.title}"`);
        }
    }
};

//Task 4: Create a VIPPatron Class that inherits from Patron

class VIPPatron extends Patron {
    constructor(name) {
       super(name);
       this.priority = true;
    };
   borrowBook(book){
       if(book.isAvailable){
           book.isAvailable = false;
           this.borrowedBooks.push(book);
           console.log(`${this.name} (VIP) has borrowed "${book.title}"`);
       } else {
           console.log(`Sorry, "${book.title}" is currently not available.`);
       };
    };
};
