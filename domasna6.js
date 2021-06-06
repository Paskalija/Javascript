
let books = [
    {
        title: 'Mojot dedo Louis Vuitton',
        year: 2009,
        author: 'Isidora Bjelica',

    },
    {
        title: 'Think and Grow Rich',
        year: 1937,
        author: 'Napoleon Hill',

    }
];

for (let i = 0; i < books.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = `${books[i].title} - ${books[i].author}`;
    console.log(p, `${books[i].title} ${books[i].author}`);
    document.body.appendChild(p);
};
books[0].read = true;
books[1].read = false;
let book_ul = document.createElement('ul');
for (let i = 0; i < books.length; i++) {
    let book_li = document.createElement('li');
    book_li.innerHTML = `${books[i].title} - ${books[i].author} - ${books[i].year}`;
    console.log(book_li, `${books[i].title} - ${books[i].author} - ${books[i].year}`);
    if (books[i].read) {
        book_li.style.color = 'red';
    }
    book_ul.appendChild(book_li);
}


document.body.appendChild(book_ul);