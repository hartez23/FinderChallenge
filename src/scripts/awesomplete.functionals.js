// init library to autocomplete
var awesomplete = new Awesomplete(typeBooks, {
    minChars: minChars,
    maxItems: maxItems,
    autoFirst: false
});

// init to show list of books
function listBooks(data) {
    var listBooks = [];

    for( var i = 0; i < data.length; i++ ){
        listBooks.push(data[i].title);
    };

    return listBooks;
}

// create component HTML of the item book
function createComponentBook(data) {
    var article = document.createElement('article');
        img = document.createElement('img'),
        h3 = document.createElement('h3'),
        p = document.createElement('p');

    img.src = data.image;
    img.alt = data.title;

    h3.textContent = data.title;

    p.textContent = data.teaser;

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);

    return article;
}

// return obj width books filtered
function resultBooks(data) {
    var resultBooks = [],
        checkBook;

    for( var k = 0; k < data.length; k++ ){
                                                                                                                        checkBook = data[k].title.toLowerCase().indexOf(typeBooks.value.toLowerCase());

        if( checkBook != -1 ) {
            resultBooks.push(data[k]);
        }
    }
 
    return          resultBooks;
}

function ajaxAwesomplete(xobj, isSubmit) {
    xobj.onload = function(){
        var data =  JSON.parse(xobj.responseText),
            books = data.data;

        if( isSubmit === undefined || isSubmit === null ) {
            var objResultBooks = resultBooks(books);

            if( objResultBooks.length == 0 ) {
                queryListBook.innerHTML = '<p>No hay datos para esta búsqueda.</p>';
            } else {
                for (var m = 0; m < maxItemBooksResult; m++) {
                    queryListBook.appendChild(createComponentBook(objResultBooks[m]));
                };
            }
        }

        awesomplete.list = listBooks(books);
    };
}