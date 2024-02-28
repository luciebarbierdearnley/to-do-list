function addToList(event) {
  event.preventDefault();
  let enteredItem = document.querySelector("#user-input").value;
  let listItems = document.querySelector("#items");

  listItems.innerHTML += ` <div class="display-items">
            <li>${enteredItem}s</li>
            <p class="bg-lime-600 ps-4 pe-4 rounded-full text-white add">x</p>
          </div>`;
}

let addButtonEl = document.querySelector("#form");
addButtonEl.addEventListener("submit", addToList);
