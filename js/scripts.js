var itemsByButton = document.getElementsByClassName ('button');
console.log(itemsByButton);

for ( var i = 0; i < itemsByButton.length; i++) {

var newElem = document.createElement('button');

newElem.innerText = 'Tekst wewnątrz tagu button';

console.log(newElem.innerText);
console.log(itemsByButton[i]);
}
