// disabled key to generate autocomplete 
function isReservedKey() {
	var code = (event.keyCode || event.which);  

	return code === 37 || code === 38 || code === 39 || code === 40 || code === 27 || code === 13
};


// enable/disabled button submit
function activateForm(boxText) {
    var buttonSearch = document.getElementById('buttonSearch');

    if( boxText.value.length > 2 ) {
    	buttonSearch.removeAttribute('disabled');
		loadJSON(JSON_FILE, 'isSubmit');
    } else {
    	buttonSearch.disabled = 'true';
    }
}

// empty content book when research 
function emptyArticles() {
	while( queryListBook.firstChild ) {
		queryListBook.removeChild(queryListBook.firstChild);
	}
} 

// Submit when button enabled
function validButton(element) {
	if( element.hasAttribute('disabled') ) {
		alert('Agrega más de 3 caracteres')
	} else {
		loadJSON(JSON_FILE, undefined);
	}
}

function searchForm(){
	var buttonSearch = document.getElementById('buttonSearch'),
		formSearcherBooks = document.getElementById('formSearcherBooks');

	// Submit event to show books filtered
	formSearcherBooks.addEventListener('submit', function(event){
		event.preventDefault();
		emptyArticles();
		validButton(buttonSearch);
	}, false)


	// Generate the autocomplete list
   	typeBooks.addEventListener('keyup', function(event) {
   		!isReservedKey() && activateForm(typeBooks);
   	});
}