function newItem(){
  let list = $('#list');

  let li = $('<li></li>');

  let inputValue = $('#input').val();
  li.append(inputValue);

  $("#button").on("keypress",function(e){
    if(inputValue === " " && e.keyCode == 13){
      alert("Enter an item");
    }
    else{
      list.append(li);
    }
}



li.on('click',function strike(){
    li.addClass('strike');
});

  let crossOutButton = $('<crossOutButton></<crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);


  crossOutButton.on('click',deleteItem);
  function deleteItem(){
    li.addClass('delete');
  }
