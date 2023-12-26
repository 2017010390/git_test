const input = document.querySelector("#item");
const btnAddItem = document.querySelector("button");
const list = document.querySelector("ul");

btnAddItem.addEventListener('click', addItem);

function addItem()
{
  const item = document.createElement("li");
  const span = document.createElement("span");
  const btnDeleItem = document.createElement("button");
  
  btnDeleItem.textContent = "Delete";
  btnDeleItem.addEventListener('click', removeItem);
  span.textContent = input.value;
  item.appendChild(span);
  item.appendChild(btnDeleItem);
  list.appendChild(item);
}

function removeItem(event)
{
  const item = event.currentTarget.parentElement;
  item.remove();
}