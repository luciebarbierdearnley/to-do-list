function addToList(event) {
  event.preventDefault();
  let enteredItem = document.querySelector("#user-input").value;
  let listItems = document.querySelector("#items");

  listItems.innerHTML = enteredItem;
}

let addButtonEl = document.querySelector("#form");
addButtonEl.addEventListener("submit", addToList);
