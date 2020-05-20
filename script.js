//global variables
let myLibrary = [];
const container = document.querySelector('#container')
const form = document.getElementById('newbook-form') 
const newBookDiv = document.getElementById('newbook-div')
const newBookButton = document.getElementById('newbook-button') 

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
newBookButton.addEventListener('click',collapseForm);




//functions
function collapseForm() {
    if(newBookDiv.style.display==='none' || newBookDiv.style.display.length===0){
        newBookDiv.style.display='block';
        newBookButton.classList.replace('button', 'active')
    } 
    else {
        newBookDiv.style.display='none';
        newBookButton.classList.replace('active', 'button')
    }
}


function submitBook(e) {
    e.preventDefault();
    const newBook = new Book(item('title'), item('author'), item('pages'),item('read'))
    addBookToLibrary(newBook)
    render()
    function item(name){
        value = document.getElementsByName(name)[0].value
        if(name==='read'){
            value = ['no','nah','nope','not today', 'didn\'t', 'didnt', '', 'scott'].includes(value.toLowerCase()) ? false: true;
        }
        if(value.length===0){
            if(name=='title') value = 'Nothing';
            if(name=='author') value = 'Scott Johnson'
            if(name=='pages') value = 666
        }
        return value
    }   
    e.target.reset()
}


function Book(title, author, pages, isRead){
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = isRead
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read':'not read yet'}`
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

        appendDelete(bookContainer, e);

        bookContainer.appendChild(bookInfo);
        appendRead(bookContainer, e);

        container.appendChild(bookContainer);
    }
}

function appendRead(bookContainer, currentBook){
    let readButton = document.createElement('div')
    readButton.classList.add('readButton')
    readButton.innerHTML = 'Read';
    readButton.addEventListener('click', (e) => {
        if (currentBook.isRead){
            currentBook.isRead = false;
        }

        else {
            currentBook.isRead = true;
        
        }

    updateRead(bookContainer, currentBook);
    
    });
    bookContainer.appendChild(readButton);

}

function appendDelete(bookContainer, currentBook){
    let deleteButton = document.createElement('div')
    deleteButton.classList.add('deleteButton')
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', (e) => {
       
        deleteBook(bookContainer, currentBook);
        render();
    
    });
    bookContainer.appendChild(deleteButton);

}

function updateRead(bookContainer,currentBook) {
    bookContainer.childNodes[1].innerHTML = currentBook.info();

}

function deleteBook(bookContainer, currentBook){
    myLibrary = myLibrary.filter(e=>(e!==currentBook));
}



