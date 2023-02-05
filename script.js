const input = document.querySelector("input");
const addButton = document.querySelector(".submit-btn");
const tasks = document.querySelector("ul");

addButton.addEventListener("click", addTask);

var values = [];

function addTask(){
  task = document.createElement("li");
  taskValue = input.value;
  
  if(!(values.includes(taskValue))){
    task.innerHTML =`<input  type="checkbox">` + taskValue + `<button class="danger">×</button>`;
    tasks.appendChild(task);
    values.push(taskValue);
  } else{
    alert("the value exists!")
  }
  console.log(values);
  const deleteBtn = task.querySelector(".danger");
  deleteBtn.addEventListener("click", (e) =>{
    console.log(e.target.parentElement.innerHTML);
    e.target.parentElement.remove();
    
  })
  const checkbox = task.querySelector(input);
  if(checkbox.checked){
    checkbox.target.parentElement.style.textDecoration = "stroke";
  } 
}
console.log(values);