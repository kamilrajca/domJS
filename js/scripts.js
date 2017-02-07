var itemsByButton = document.getElementsByClassName('button');
console.log(itemsByButton);

for ( var i = 0; i < itemsByButton.length; i++) {

  console.log('Tekst wewnątrz tagu button: ' + itemsByButton[i].innerText);
}

// dodanie eventu 
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item</li>'
  

  var li = list.getElementsByTagName('li');

  for (var x=0; x<li.length; x++) {
    li[x] += x + 1;
  }

});


