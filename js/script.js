function newItem(){
  let list = $('#list');

  let li = $('<li></li>');

  let inputValue = $('#input').val();
  list.append(inputValue);

}

// To strike items

function strike(){

  li.addClass('strike');
}
li.on('click',function strike(){
  li.toggleClass('strike');
});

// display cross crossOutButton
let crossOutButton = $('<crossOutButton></<crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

// to delete the items

crossOutButton.on('click',deleteItem);
function deleteItem(){
  li.addClass('delete');
}

// to sort the items
list.sortable();
