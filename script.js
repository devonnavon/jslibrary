//global variables
let myLibrary = [];
const container = document.querySelector('#container')
const form = document.getElementById('newbook-form') 
//const submitBook = form.querySelector('.button')


//page code
const ultra = new Book('UltraLearning', 'some dude', 400, false)
const yo = new Book('Yo', 'jeez', 400, false)
const please = new Book('Please', 'some dude', 400, true)
const thanks = new Book('thanks', 'my guy', 200, false)
const yes = new Book('zzz', 'my guy', 200, false)

addBookToLibrary(ultra, yo, please, thanks, yes)

render();


//listeners
form.addEventListener('submit', submitBook)

//functions
function submitBook(e) {
    e.preventDefault();
    console.log(item('title'))

    const newBook = new Book(item('title'), item('author'), item('pages'), Boolean(item('read')))
    addBookToLibrary(newBook)
    render()
    function item(name){
        value = document.getElementsByName(name)[0].value
        if(value='') value = 'none'
        if(name==='read' && ['no','nah','nope','not today', 'didn\'t', 'didnt', ''].includes(value.toLowerCase())) value=false;
        console.log(name,value)
        return document.getElementsByName(name)[0].value
    }
  
}


function Book(title, author, pages, isRead){
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = isRead
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead ? 'read':'not read yet'}`
    }
}

function addBookToLibrary(...newBooks) {
    [...newBooks].forEach(e=>myLibrary.push(e))
}

function render(){
    container.innerHTML=""
    myLibrary.forEach(e=>{renderBook(e)});
    function renderBook(e){
        const bookContainer = document.createElement('div')
        bookContainer.classList.add('bookContainer')

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('bookInfo')
        bookInfo.innerHTML = e.info();

        appendDelete(bookContainer);

        bookContainer.appendChild(bookInfo);
        appendRead(bookContainer);

        container.appendChild(bookContainer);
    }
}

function appendRead(bookContainer){
    let readButton = document.createElement('div')
    readButton.classList.add('readButton')
    readButton.innerHTML = 'Read';
    readButton.addEventListener('click', function(event){
        event.parentElement. = "background-color: black";
    })
    bookContainer.appendChild(readButton);

}

function appendDelete(bookContainer){
    let deleteButton = document.createElement('div')
    deleteButton.classList.add('deleteButton')
    deleteButton.innerHTML = 'X';
    bookContainer.appendChild(deleteButton);

}




