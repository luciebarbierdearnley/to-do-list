const addButtonEl = document.querySelector("#form");
const input = document.querySelector("input");
const listItems = document.querySelector("#items");

function addToList(event) {
  event.preventDefault();
  const itemDiv = document.createElement("div");
  const listItemEL = document.createElement("li");
  const enteredItem = document.querySelector("#user-input").value;
  listItemEL.innerHTML = enteredItem;
  const deleteButton = document.createElement("button");

  itemDiv.classList.add("display-items");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "x";

  listItems.appendChild(itemDiv);
  itemDiv.appendChild(listItemEL);
  itemDiv.appendChild(deleteButton);

  input.value = "";
}

function deleteItem(event) {
  const clickedItem = event.target;
  console.log(clickedItem);

  if (clickedItem) {
    const removeAction = clickedItem.parentElement;
    removeAction.remove();
  }
}

addButtonEl.addEventListener("submit", addToList);
listItems.addEventListener("click", deleteItem);
