var itemsByButton = document.getElementsByClassName ('button');
console.log(itemsByButton);

for ( var i = 0; i < itemsByButton.length; i++) {

var newElem = document.createElement('button');

newElem.innerText = 'Tekst wewnątrz tagu button';

console.log(newElem.innerText);
console.log(itemsByButton[i]);
}

// dodanie eventu 
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item </li>'
  var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);
});



