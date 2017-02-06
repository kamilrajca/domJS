var itemsByButton = document.getElementsByClassName('button');
console.log(itemsByButton);

for ( var i = 0; i < itemsByButton.length; i++) {

  console.log('Tekst wewnątrz tagu button: ' + itemsByButton[i].innerText);
}
