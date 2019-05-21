
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

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