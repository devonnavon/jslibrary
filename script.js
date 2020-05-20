
function Book(title, author, pages, isRead){
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.isRead = isRead
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead ? 'read':'not read yet'}`
    }
}

const ultra = new Book('UltraLearning', 'some dude', 400, false)
console.log(ultra.info())