
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem (e) {
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.classList.add('list-group-item');
  var deleteBtn = document.createElement('button');
  deleteBtn.classList = 'btn btn-danger btn-sm float-right delete';
  li.append(document.createTextNode(newItem));
  deleteBtn.append(document.createTextNode('X'));
  li.append(deleteBtn);

  itemList.appendChild(li);
}

function removeItem (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you Sure?')) {
      e.target.parentNode.remove();
    }
  }
}

function filterItems (e) {
  text = e.target.value.toLowerCase();
  var items = document.getElementsByTagName('li');
  [...items].forEach(item => {
    if (item.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}