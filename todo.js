
var add = document.getElementById('addtodo');
var task = document.querySelector('.todo-item')
var inputField = document.getElementById('task-to-add')
const containerdiv = document.querySelector('.todos');
add.addEventListener('click', ()=>{
  var taskitem = document.createElement('p');
  taskitem.setAttribute("class", "todo-item");
  taskitem.innerText=inputField.value;
  containerdiv.appendChild(taskitem);

});

task.addEventListener('click',()=>{
  taskitem.classList.add('hidden');
});
