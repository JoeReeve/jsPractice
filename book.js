class book {
    constructor(title, author, pageCount, haveRead) {
        this.title = title
        this.author = author
        this.pageCount = pageCount
        this.haveRead = haveRead
        this.info = function () {
            return `${title} by ${author}, ${pageCount} pages, has read: ${haveRead}`
        }
    }
}
const btn = document.getElementById('btn');
btn.addEventListener("click", function() {
    openForm()
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


const formSubmit = document.getElementById('closeForm')
formSubmit.addEventListener("click", function(e) {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pageCount = document.getElementById("pageCount").value
    let haveRead = document.getElementById("haveRead").value
    if (document.getElementById('haveRead').checked) {
        haveRead = true
    } else {
        haveRead = false
    }

    let newBook = new book(title, author, pageCount, haveRead)
    addBook(newBook)
    removeBooks()
    displayBooks()
    closeForm()

})

function removeBooks() {
    
    if (document.contains(document.getElementById('bookList'))) {
        const bl = document.getElementById('bookList')
        while(bl.firstChild) {
            bl.removeChild(bl.firstChild)
        }
    }
}

let myLibrary = []

function addBook(book) {
    book.id = myLibrary.length
    myLibrary.push(book)
}

function toggleRead(book) {
    book.haveRead = !book.haveRead
}



const bookList = document.getElementById('bookList')
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div')
        const title = document.createElement('h3')
        title.textContent = myLibrary[i].title;
        bookCard.appendChild(title)
        const author = document.createElement('p')
        author.textContent = `Author: ${myLibrary[i].author}`
        bookCard.appendChild(author)
        const pageCount = document.createElement('p')
        pageCount.textContent = `Page count: ${myLibrary[i].pageCount}`
        bookCard.appendChild(pageCount)
        const haveRead = document.createElement('p')
        haveRead.textContent = `Have read? - ${myLibrary[i].haveRead}`
        bookCard.appendChild(haveRead)
        bookCard.id = i
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", function() {
            myLibrary.splice(i, 1)
            removeBooks()
            displayBooks()
        })
        const toggleReadBtn = document.createElement('button')
        toggleReadBtn.textContent = "Toggle Read"
        toggleReadBtn.addEventListener("click", function() {
            toggleRead(myLibrary[i])
            haveRead.textContent = `Have read? - ${myLibrary[i].haveRead}`

        })
        bookCard.appendChild(toggleReadBtn)
        bookCard.appendChild(deleteBtn)
        bookCard.classList.add('card')
        bookList.appendChild(bookCard)
    }
}






const WoK = new book('The Way of Kings', 'Brandon Sanderson', 1200, true)

addBook(WoK)

console.log(myLibrary.length)

console.log(WoK.info())

displayBooks()