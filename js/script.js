function newItem() {
  let list = $("#list");

  let li = $("<li></li>");

  let inputValue = $("#input").val();
  li.append(inputValue);

  // To strike items

  li.on("dblclick", function strike() {
    li.toggleClass("strike");
  });

  // display cross crossOutButton
  let crossOutButton = $("<crossOutButton></<crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  // to delete the items

  crossOutButton.on("click", deleteItem);
  function deleteItem() {
    li.addClass("delete");
  }
  list.append(li);
  // to sort the items
  list.sortable();
}
