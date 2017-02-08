var itemsByButton = document.getElementsByClassName('button');
console.log(itemsByButton);

for ( var i = 0; i < itemsByButton.length; i++) {

  console.log('Tekst wewnątrz tagu button: ' + itemsByButton[i].innerText);
}

// dodanie eventu 
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var li = list.getElementsByTagName('li');
  var number = li.length;

  list.innerHTML += '<li>item ' + number + '</li>';
});

