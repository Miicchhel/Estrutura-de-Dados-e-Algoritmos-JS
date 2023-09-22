// duas formas de se criar um objeto
var obj1 = new Object()

var obj2 = {}

// um objeto é uma instância de ma classe. Uma classe define as características do objeto

// função construtora
function Book1(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
}

Book1.prototype.printTitle = function() {
    console.log(this.title);
}

// sintaxe de classe
class Book2 {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    
    printTitle = function() {
        console.log(this.title);
    }
}


var book1 = new Book1('Estrutura de dados e Algoritmos com JavaScript', 500, 'isbn')
console.log(typeof(book1))
book1.printTitle()

var book2 = new Book2('Harry Potter', 500, 'isbn')
console.log(typeof(book2))
book2.printTitle()
