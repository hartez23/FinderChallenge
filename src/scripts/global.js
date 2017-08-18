/*
  constants and global functions
*/
const minChars = 3;
const maxItems = 7;
const maxItemBooksResult = 9;


var typeBooks = document.getElementById('typeBooks'),
    queryListBook = document.querySelector('.list-books'),
    JSON_FILE = 'books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, isSubmit){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    ajaxAwesomplete(xobj, isSubmit);
    xobj.send(null);
};