function addToList(event) {
  event.preventDefault();
  let enteredItem = document.querySelector("#user-input").value;
  let listItems = document.querySelector("#items");

  listItems.innerHTML += ` <div class="display-items">
            <li id="delete-item">${enteredItem}s</li>
            <button class="bg-lime-600 ps-4 pe-4 rounded-full text-white add" id="delete-button">x</button>
          </div>`;

  let deleteAction = document.getElementById("delete-button");
  deleteAction.addEventListener("click", deleteItem);
}

function deleteItem(event) {
  let deleteButton = document.getElementById("delete-button");
  let deleteItem = document.getElementById("delete-item");
  deleteButton.remove();
  deleteItem.remove();
}

let addButtonEl = document.querySelector("#form");
addButtonEl.addEventListener("submit", addToList);
