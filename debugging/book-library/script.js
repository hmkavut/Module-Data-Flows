let myLibrary = [];

window.addEventListener("load", function (e) {
    populateStorage();
    render();
});

function populateStorage() {
    if (myLibrary.length === 0) {
        let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
        let book2 = new Book(
            "The Old Man and the Sea",
            "Ernest Hemingway",
            "127",
            true
        );
        myLibrary.push(book1);
        myLibrary.push(book2);
        render();
    }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

function submit() {
    if (
        titleInput.value === null ||
        titleInput.value === "" ||
        pagesInput.value === null ||
        pagesInput.value === "" ||
        authorInput.value === null ||
        authorInput.value === ""
    ) {
        alert("Please fill all fields!");
        return false;
    } else {
        let book = new Book(
            titleInput.value,
            authorInput.value,
            pagesInput.value,
            checkInput.checked
        );
        myLibrary.push(book);
        render();
    }
}

function Book(title, author, pages, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
}

function render() {
    let table = document.getElementById("display");
    let rowsNumber = table.rows.length;

    for (let n = rowsNumber - 1; n > 0; n--) {
        table.deleteRow(n);
    }

    let length = myLibrary.length;
    for (let i = 0; i < length; i++) {
        let row = table.insertRow(1);
        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let pagesCell = row.insertCell(2);
        let wasReadCell = row.insertCell(3);
        let deleteCell = row.insertCell(4);

        titleCell.innerHTML = myLibrary[i].title;
        authorCell.innerHTML = myLibrary[i].author;
        pagesCell.innerHTML = myLibrary[i].pages;

        let changeBut = document.createElement("button");
        changeBut.id = i;
        changeBut.className = "btn btn-success";
        wasReadCell.appendChild(changeBut);
        let readStatus = myLibrary[i].check ? "No" : "Yes";
        changeBut.innerText = readStatus;

        changeBut.addEventListener("click", function () {
            myLibrary[i].check = !myLibrary[i].check;
            render();
        });

        let delButton = document.createElement("button");
        delButton.id = i + 5;
        deleteCell.appendChild(delButton);
        delButton.className = "btn btn-warning";
        delButton.innerHTML = "Delete";
        delButton.addEventListener("click", function () {
            alert(`You've deleted title: ${myLibrary[i].title}`);
            myLibrary.splice(i, 1);
            render();
        });
    }
}
